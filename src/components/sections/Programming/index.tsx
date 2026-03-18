import { useState, useMemo } from "react";

import { Section } from "../../commons/structure/Section";
import Card from "./subcomponents/Card";
import CardProjeto from "./subcomponents/Modal";
import SoonCard from "../../commons/toolkit/SoonCard";

import useIsMobile from "../../../hooks/window/Mobile";
import useIsMobileHeight from "../../../hooks/window/MobileHeight";

import programmingContent from "../../../assets/content/programming";


import { 
  Container, 
  DaysTabs, 
  TimeTabs, 
  ContentWrapper, 
  TabButton, 
  TimeButton, 
  EventsList 
} from "./styles";

export default function Programming() {

  const isMobile = useIsMobile();
  const isMobileHeight = useIsMobileHeight();
  const shouldUseMobileLayout = isMobile || isMobileHeight;

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
  
  const availableTimesOfDay = useMemo(() => {
    if (!selectedDay) return [];
    const times = data
      .filter(event => event.date === selectedDay)
      .map(event => event.time);
    return Array.from(new Set(times)).sort();
  }, [data, selectedDay]);

  const [selectedTime, setSelectedTime] = useState<string>("");

  const currentSelectedTime = availableTimesOfDay.includes(selectedTime) 
    ? selectedTime 
    : availableTimesOfDay[0] || "";

  const [eventIndex, setEventIndex] = useState<number>(0);

  const handleDayChange = (day: string) => {
    setSelectedDay(day);
    setEventIndex(0);
  };

  const filteredEvents = useMemo(() => {
    return data.filter(e => e.date === selectedDay && e.time === currentSelectedTime);
  }, [data, selectedDay, currentSelectedTime]);

  const currentEvent = filteredEvents[eventIndex];

  const soonOrNot = false;

  return (
    <Section
      title="Programação"
      currentSectionId="Programming"
      nextSectionId="Highlights"
    >
      <Container>
        {soonOrNot ? (

          <SoonCard />

        ) : (
          <>
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

          <ContentWrapper>

            <EventsList>
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

              {currentEvent && (
                shouldUseMobileLayout ? (
                  <CardProjeto key={`${currentEvent.name}-${eventIndex}`} {...currentEvent} />
                ) : (
                  <Card
                    key={`${currentEvent.name}-${eventIndex}`}
                    {...currentEvent}
                    pagination={{
                      current: eventIndex + 1,
                      total: filteredEvents.length,
                      onNext: () => setEventIndex(i => Math.min(i + 1, filteredEvents.length - 1)),
                      onPrev: () => setEventIndex(i => Math.max(i - 1, 0))
                    }}
                  />
                )
              )}
            </EventsList>
          </ContentWrapper>
        </>

        )}
      </Container>
    </Section>
  );
}