type document;
type htmlElement;
external document: document = "document";
[@mel.send]
external getElementById: (document, string) => htmlElement = "getElementById";
