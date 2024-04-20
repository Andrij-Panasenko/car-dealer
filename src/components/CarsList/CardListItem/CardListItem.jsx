import bankLogo from "../../../assets/bankLogo.png"
import tempImg from "../../../assets/Rectangle.png" //temporary data
import { CarNameTittle, CarPrice, Img, ListItem, Subsidy, SubsidyWrapper } from "./CardListItem.styled";

export const CardListItem = () => {
    return (
      <ListItem>
        {/* <div> */}
          <Img src={tempImg} alt="img" />
          <div hidden>overlay</div>
        {/* </div> */}

        <CarNameTittle>Test car name</CarNameTittle>
        <CarPrice>test car price</CarPrice>
        <ul></ul>
        <SubsidyWrapper>
          <Subsidy>Subsidy from</Subsidy>
          <a href="#">
            <img src={bankLogo} alt="Bank of America" />
          </a>
        </SubsidyWrapper>
      </ListItem>
    );
};
