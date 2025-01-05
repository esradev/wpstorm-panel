import { Route, Routes } from "react-router-dom";
import { DirectionProvider } from "@radix-ui/react-direction";

import Layout from "./layout";
import Dashboard from "./dashboard";
import Settings from "./settings";

const NotFound = () => <div>Not Found</div>;

const App = () => {
  const items = [
    {
      url: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      url: "/settings",
      name: "Settings",
      component: Settings
    }
  ];

  return (
    <DirectionProvider dir="rtl">
      <Layout
        children={
          <div className="p-2">
            <Routes>
              {items.map((route, index) => (
                <Route key={index} path={route.url} element={<route.component route={route} />} />
              ))}
              <Route key="not_found" path="*" element={<NotFound />} />
            </Routes>
          </div>
        }
      />
    </DirectionProvider>
  );
};

export default App;
