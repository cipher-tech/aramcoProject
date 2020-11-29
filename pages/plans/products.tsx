import React from "react";
import {
  CustomFontSize,
  Foot,
  Head,
  NavBar,
  Plan,
  StockPlan,
  Text,
  UserNav,
} from "../../components";
import Nav from "../../components/navbar/nav";
import theme from "../../styles/theme";

const Products = () => {
  return (
    <>
      <style jsx>{`
        .main {
          grid-column: 1/-1;
          width: 100%;
          font-size: ${theme.font.xxsmall};
          color: ${theme.colorPrimary};
        }
      `}</style>
      <CustomFontSize>
        <div className="main">
          <UserNav />
          <NavBar />
          <Head
            header="Partnering with us."
            title="Product"
            text="Explore Our stocks and shares"
            image="/images/headerImage.jpg"
          />

          <Text
            text={`In Saudi Aramco our goal is to sell hydrocarbon products in a safe, efficient, and customer focused manner through a talented workforce, adopting latest technology, and effective processes.

            All potential customers are required to sign a sales agreement for purchasing hydrocarbon products. There are different registration and qualification processes depending on a number of factors such as the customer’s facility location, type of product and the intended usage.
            We support the long-term vitality of our commercial ecosystem. In particular, being a catalyst for the development of a Saudi energy services sector helps attract, establish, and promote domestic energy-related industries that are globally competitive.

            We also encourage and support the development of other enterprises that have strategic importance to us. A flourishing commercial and industrial ecosystem in the Kingdom means a more successful Saudi Arabia and a more productive environment for our company.
            Our product range includes:

            Gasoline,
            Crude Oil,
            Sulfur,
            LPG,
            Propane,
            Butane,
            Natural Gasoline (NG),
            Sales Gas,
            Ethane,
            Kerosene,
            Jet A-1,
            JP-8,
            Fuel Oil,
            Paving Asphalt`}
          />

          <StockPlan />
          <Foot />
        </div>
      </CustomFontSize>
    </>
  );
};

export default Products;
