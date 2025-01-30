import { CORE_CONCEPTS, EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";
const CoreExamples = () => {
  const [selectedConcept, setSelectedConcept] = useState("");
  const handleSelection = (title) => setSelectedConcept(title.toLowerCase());

  const tabContent = selectedConcept ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedConcept].title}</h3>
      <p>{EXAMPLES[selectedConcept].description}</p>
      <pre>
        <code>{EXAMPLES[selectedConcept].code}</code>
      </pre>
    </div>
  ) : (
    <p>Please Select a Tab</p>
  );

  return (
    <Section id="examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                isSelected={concept.title === selectedConcept}
                onClick={() => handleSelection(concept.title)}
                key={concept.title}
              >
                {concept.title}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default CoreExamples;
