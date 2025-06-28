import { Redirect } from "expo-router";

const App = () => {
  // return <Redirect href={'./(stack)/home'} />
  // return <Redirect href={'./tabs'} />
  // return <Redirect href={"./drawer"} />;
  return <Redirect href={"/(drawer)/(tabs)/home"} />;
};

export default App;
