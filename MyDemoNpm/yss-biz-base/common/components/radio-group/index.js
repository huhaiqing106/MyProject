import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import { $ajax } from "yss-biz";

export default (props) => {
  let TypeItem;
  let resProps = {};

  const [options, setOptions] = useState([]);

  Object.keys(props).forEach((key) => {
    if (key !== "options") {
      resProps[key] = props[key];
    }
  });

  switch (props.type) {
    case "Button":
      TypeItem = Radio.Button;
      break;
    default:
      TypeItem = Radio;
  }

  useEffect(() => {
    if (!!props.getDics) {
      $ajax(
        "/dfas-base-biz/dics/listAllSub",
        { parentDicCode: props.getDics },
        "post"
      ).then((res) => {
        let radioList = [
          {
            value: "",
            label: "全部",
          },
        ];
        let _radioList =
          res?.data?.map((item) => ({
            value: item.dicCode,
            label: item.dicExplain,
          })) || [];
        radioList =  props.isNeedAll !== false ?  [...radioList, ..._radioList] : _radioList
        setOptions(radioList);
      });
    } else {
      setOptions(props.options || []);
    }
  }, [props.getDics]);

  return (
    <Radio.Group {...resProps} style={{ width: "100%" }}>
      {(options || []).map((item, index) => {
        return (
          <TypeItem value={item.value} key={index}>
            {item.label}
          </TypeItem>
        );
      })}
    </Radio.Group>
  );
};
