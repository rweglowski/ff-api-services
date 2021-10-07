import { SchemaV2FieldType } from "@flowfact/types";

export namespace CsvDataToEntityImporter {
  export interface ImportStatus {
      entries: number,
      imported: number,
      failed: number,
  }
  
  export interface ImportField {
    name: string
    value: string
    type: SchemaV2FieldType
    caption: string
    condition: string
    maxOccurs: number
    possibleValues: Array<ImportField>
    selectedValues: Array<ImportField>
}
}
