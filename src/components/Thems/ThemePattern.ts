export interface Color {
  title: string;
  backgroundColor: string;
  borderSolid: string;
  color: string;
}

const colors: Color[] = [
  {
    title: 'default',
    backgroundColor: "beige",
    borderSolid: "burlywood",
    color: "black",
  },
  {
    title: 'dark',
    backgroundColor: "dimgrey",
    borderSolid: "white",
    color: "white",
  },
  {
    title: 'light',
    backgroundColor: "aliceblue",
    borderSolid: "#514dff",
    color: "black",
  },
  {
    title: 'patriotic',
    backgroundColor: "rgb(247 229 141)",
    borderSolid: "rgb(0 70 255)",
    color: "rgb(0 70 255)",
  },
];
export default colors