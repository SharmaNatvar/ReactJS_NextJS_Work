export function BioName(props) {
  console.log("========== props ==========", props);
  return `Hello my self ${props.name}`;
}
export function BioAge(props) {
  console.log("========== props ==========", props);
  return `im  ${props.age} old`;
}
