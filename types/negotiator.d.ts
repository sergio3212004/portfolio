declare module "negotiator" {
  export default class Negotiator {
    constructor(opts: { headers: Record<string, string> });
    languages(): string[];
    charsets(): string[];
    encodings(): string[];
    mediaTypes(): string[];
  }
}
