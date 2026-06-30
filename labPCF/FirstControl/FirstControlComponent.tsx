import * as React from "react";
import {
  FluentProvider,
  webLightTheme,
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@fluentui/react-components";

export interface FirstControlProps {
  notifyOutputChanged: () => void;
  headerText: string;
}

export const FirstControlComponent: React.FC<FirstControlProps> = ({
  notifyOutputChanged,
  headerText,
}) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Text>{headerText}</Text>
      <Accordion>
        <AccordionItem value="1">
          <AccordionHeader>{headerText} Header 1</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 1</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionHeader>{headerText} Header 2</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 2</div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionHeader>{headerText} Header 3</AccordionHeader>
          <AccordionPanel>
            <div>Accordion Panel 3</div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </FluentProvider>
  );
};
