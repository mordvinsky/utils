export type Rule<T> = (item: T, index?: number, array?: T[]) => boolean;
export type Ruleset<T> = Rule<T>[];

function complexFilter<T>(data: T[], ruleset: Ruleset<T>) {
  return data.filter((item, index, array) => {
    ruleset.every((rule) => rule(item, index, array));
  });
}
export default complexFilter;
