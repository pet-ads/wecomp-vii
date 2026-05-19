import { useState, useMemo, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Components
import { Section } from "../../commons/structure/Section";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Mobile";
import SoonCard from "../../commons/toolkit/SoonCard";

// Hooks
import useIsMobile from "../../../hooks/window/Mobile";
import useIsMobileHeight from "../../../hooks/window/MobileHeight";

// Data
import programmingContent from "../../../assets/content/programming";

// Styles 
import {
  Container,
  DaysTabs,
  TimeTabs,
  ContentWrapper,
  TabButton,
  TimeButton,
  EventsList,
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownItem,
  IconArrow,
  DayDivider,
  PaginationWrapper
} from "./styles";

export default function Programming() {
  const isMobile = useIsMobile();
  const isMobileHeight = useIsMobileHeight();
  const shouldUseMobileLayout = isMobile || isMobileHeight;
  const activeItemRef = useRef<HTMLDivElement>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const data = useMemo(() => programmingContent.map(e => ({
    ...e,
    date: e.date.trim(),
    time: e.time.trim()
  })), []);

  const days = useMemo(() =>
    Array.from(new Set(data.map(event => event.date))).sort(),
    [data]
  );

  const [selectedDay, setSelectedDay] = useState<string>(days[0] || "");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [eventIndex, setEventIndex] = useState<number>(0);

  const dropdownListRef = useRef<HTMLDivElement>(null);

  const availableTimesOfDay = useMemo(() => {
    if (!selectedDay) return [];
    const times = data
      .filter(event => event.date === selectedDay)
      .map(event => event.time);
    return Array.from(new Set(times)).sort();
  }, [data, selectedDay]);

  const currentSelectedTime = useMemo(() => {
    return availableTimesOfDay.includes(selectedTime)
      ? selectedTime
      : availableTimesOfDay[0] || "";
  }, [availableTimesOfDay, selectedTime]);

  useEffect(() => {
    if (isDropdownOpen && activeItemRef.current && dropdownListRef.current) {
      const list = dropdownListRef.current;
      const item = activeItemRef.current;

      const scrollPos = item.offsetTop - list.offsetTop;

      list.scrollTo({
        top: scrollPos,
        behavior: "smooth"
      });
    }
  }, [isDropdownOpen]);

  const formatLabel = (date: string, time: string) => {
    const dayNumeric = date?.split(" ")[0] || "";
    return `${dayNumeric}/10 | ${time}`;
  };

  const groupedMobileOptions = useMemo(() => {
    const groups: Record<string, string[]> = {};
    data.forEach(event => {
      if (!groups[event.date]) groups[event.date] = [];
      if (!groups[event.date].includes(event.time)) {
        groups[event.date].push(event.time);
      }
    });
    Object.keys(groups).forEach(day => groups[day].sort());
    return groups;
  }, [data]);

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    setEventIndex(0);
  };

  const filteredEvents = useMemo(() => {
    return data.filter(e => e.date === selectedDay && e.time === currentSelectedTime);
  }, [data, selectedDay, currentSelectedTime]);

  const currentEvent = filteredEvents[eventIndex];
  const soonOrNot = true;

  return (
    <Section
      title="Programação"
      currentSectionId="Programming"
      nextSectionId="Locations"
    >
      <Container>
        {soonOrNot ? (
          <SoonCard />
        ) : (
          <>
            {!shouldUseMobileLayout && (
              <DaysTabs>
                {days.map((day) => (
                  <TabButton
                    key={day}
                    $active={selectedDay === day}
                    onClick={() => handleDayChange(day)}
                  >
                    {day}
                  </TabButton>
                ))}
              </DaysTabs>
            )}

            {shouldUseMobileLayout && (
              <DropdownContainer>
                <DropdownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  {formatLabel(selectedDay, currentSelectedTime)}
                  <IconArrow $isOpen={isDropdownOpen} />
                </DropdownHeader>

                {isDropdownOpen && (
                  <DropdownList ref={dropdownListRef}>
                    {Object.entries(groupedMobileOptions).map(([day, times]) => (
                      <div key={day}>
                        <DayDivider>{day}</DayDivider>
                        {times.map((time) => {
                          const isActive = selectedDay === day && currentSelectedTime === time;
                          return (
                            <DropdownItem
                              key={`${day}-${time}`}
                              ref={isActive ? activeItemRef : null}
                              $active={isActive}
                              onClick={() => {
                                setSelectedDay(day);
                                setSelectedTime(time);
                                setEventIndex(0);
                                setIsDropdownOpen(false);
                              }}
                            >
                              {time}
                            </DropdownItem>
                          );
                        })}
                      </div>
                    ))}
                  </DropdownList>
                )}
              </DropdownContainer>
            )}

            <ContentWrapper>
              {!shouldUseMobileLayout && (
                <TimeTabs>
                  {availableTimesOfDay.map((time) => (
                    <TimeButton
                      key={time}
                      $active={currentSelectedTime === time}
                      onClick={() => {
                        setSelectedTime(time);
                        setEventIndex(0);
                      }}
                    >
                      {time}
                    </TimeButton>
                  ))}
                </TimeTabs>
              )}

              <EventsList>
                {currentEvent && (
                  <>
                    {shouldUseMobileLayout ? (
                      <CardProjeto
                        key={`${currentEvent.name}-${eventIndex}`}
                        {...currentEvent}
                      />
                    ) : (
                      <Card
                        key={`${currentEvent.name}-${eventIndex}`}
                        {...currentEvent}
                      />
                    )}

                    {filteredEvents.length > 1 && (
                      <PaginationWrapper>
                        <button
                          type="button"
                          disabled={eventIndex === 0}
                          onClick={() => setEventIndex(i => Math.max(i - 1, 0))}
                        >
                          <FaChevronLeft size={12} />
                        </button>

                        <span>
                          {eventIndex + 1} de {filteredEvents.length}
                        </span>

                        <button
                          type="button"
                          disabled={eventIndex === filteredEvents.length - 1}
                          onClick={() => setEventIndex(i => Math.min(i + 1, filteredEvents.length - 1))}
                        >
                          <FaChevronRight size={12} />
                        </button>
                      </PaginationWrapper>
                    )}
                  </>
                )}
              </EventsList>
            </ContentWrapper>
          </>
        )}
      </Container>
    </Section>
  );
}