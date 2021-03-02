import React from "react";
import { ReactComponent as NextPage } from "../assets/images/next.svg";
import { ReactComponent as DownArrow } from "../assets/images/down arrow.svg";
import { CustomButton } from "./custom_button";

const headerDetails = ["Home", "Shop", "page 1"];
console.log(headerDetails.length);
const PageInformation = ({ pagename }) => {
  return (
    <div className="pageinformation">
      <div className="pageinformation_header">
        {!pagename ? (
          <h3 className="pageinformation_header_name">Store Products</h3>
        ) : (
          <h3 className="pageinformation_header_name">{pagename}</h3>
        )}

        <span className="pageinformation_header_details">
          {headerDetails.map((page, i) => (
            <span key={i}>
              <h4>{page}</h4>
              <NextPage
                className={`nextpage ${
                  headerDetails.length - 1 === i && "inactive"
                }`}
              />{" "}
            </span>
          ))}
        </span>
      </div>
      <div className="pageinformation_details">
        <div className="pageinformation_details_info">
          Showing 28–36 of 60 results
        </div>
        <div className="pageinformation_details_btn">
          <CustomButton>
            Default Sorting <DownArrow id="sorting-arrow" />{" "}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PageInformation;
