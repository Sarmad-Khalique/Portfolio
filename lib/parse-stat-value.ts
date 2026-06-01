export type ParsedStat = {
  prefix: string;
  end: number;
  suffix: string;
  display: string;
};

/** Parses stat strings like "4+", "10+", "6+" for counter animation. */
export function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  if (!match) {
    return { prefix: "", end: 0, suffix: "", display: value };
  }
  const [, prefix = "", num = "0", suffix = ""] = match;
  return {
    prefix,
    end: parseFloat(num),
    suffix,
    display: value,
  };
}
