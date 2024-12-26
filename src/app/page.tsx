"use client";
import { Accordion } from "@eventfuzz/components";

export default function Home() {
  return (
    <Accordion
      items={[
        {
          content: (
            <p>
              EventFuzz is comprehensive protection included for free with every
              booking. It includes protection from Host cancellations, listing
              inaccuracies, and other issues like trouble checking in, as well
              as a 24-hour safety line. Learn more about how AirCover protects
              your booking
            </p>
          ),
          title: "What is  EventFuzz?",
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          title: "Event fuzz Accordion Item 2",
        },
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          title: "Dummy Accordion Item 3",
        },
      ]}
    />
  );
}
