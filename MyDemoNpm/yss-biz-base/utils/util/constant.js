import React, { createContext } from "react";

/**创建公共数据盒子 */
export const PublicProps = createContext();

/***弹框的默认属性***/
export const modalInfo = {
  getContainer: false,
  className: "modalStyle",
  destroyOnClose: true,
  maskClosable: false,
  okText: "确定",
  cancelText: "取消",
};

/***按钮组常量***/
export const icons = {
  新增: 'plus',
  删除: 'delete',
  编辑: 'edit',
  修改: 'edit',
  下载: 'download',
  上传: 'upload',
  导入: 'import',
  导出: 'export',
  反审核: 'file-sync',
  审核: "solution",
  打印: "printer",
  启用: "play-circle",
  停止: "stop",
  注销: "close-circle",
  浏览: "container",
  撤销: "reload",
  授权: "safety-certificate",
  重置密码: "reload",
  锁定: "lock",
  解锁: "unlock",
  刷新: "syncOutlined",
};
/***状态 1.启用，1.停用 2，注销***/

export const typeStatue = ["#fff", "#67C23A", "#E6A23C", "#F56C6C"];

/***审核状态 2.未审核.1.已审核 ***/
export const checkStatue = ["#fff", "#67C23A", "#F56C6C"];

/***默认页码***/
export const page = {
  reqPageNum: 1,
  reqPageSize: 20,
};

/**公共列 */
export const commonInfoVo = [
  {
    title: "审核状态",
    width: 200,
    dataIndex: "checkStatus",
  },
  {
    title: "审核人",
    dataIndex: "checkUserId",
    width: 150,
  },
  {
    title: "审核时间",
    dataIndex: "checkTime",
    width: 150,
  },
  {
    title: "创建人",
    dataIndex: "createUserId",
    width: 150,
  },

  {
    title: "创建时间",
    dataIndex: "createTime",
    width: 150,
  },

  {
    title: "修改人",
    dataIndex: "updateUserId",
    width: 150,
  },

  {
    title: "修改时间",
    dataIndex: "updateTime",
    width: 150,
  },
];

/**公共select配置 */
export const selectRequest = {
  // 请求城市
  city: {
    url: "/dfas-base-biz/paramArea/getAllProvince",
    childrenUrl: "/dfas-base-biz/paramArea/getCityByProvince",
    option: {
      value: "areaCode",
      label: "areaName",
    },
    childrenOption: {
      value: "areaCode",
      label: "areaName",
    },
    method: "post",
    childrenMethod: "post",
    childrenResName: "areaCode",
    tier: 2,
  },
  // 产品
  product: {
    url: "/dfbp-base-manage/productInfo/list",
    option: {
      value: "prodCode",
      label: "prodFullName",
    },
    method: "post",
  },
  // 产品类型树
  ProductTypeTree: {
    url: "/dfbp-base-manage/api/productType/listProductTypeTree",
    option: {
      value: "prodType",
      label: "prodTypeName",
    },
    method: "post",
  },
  fullLabelProduct: {
    url: "/dfbp-base-manage/productInfo/list",
    option: {
      value: "prodCode",
      label: "prodFullName",
    },
    fullLabel: true,
    method: "post",
  },
  // 债券
  bond: {
    url: "/dfbp-info-manage/security/listSecurityLimit",
    option: {
      value: "securityCode",
      label: "securityName",
    },
    fullLabel: true,
    method: "post",
    params: {
      resultCount: "20",
      securityType: "ZQ",
    },
    resName: "likeSecurityCode",
  },
  security: {
    url: "/dfbp-info-manage/security/list",
    option: {
      value: "securityCode",
      label: "securityName",
    },
    fullLabel: true,
    method: "post",
    params: {
      resultCount: "20",
      securityType: "ZQ",
    },
    resName: "likeSecurityCode",
  },
  // 债券类型
  bondType: {
    url: "/dfbp-info-manage/securityTypes/subType",
    option: {
      value: "securityType",
      label: "securityTypeName",
    },
    params: {
      securityTypes: ["ZQ"],
    },
    method: "post",
  },
  // 发行人
  issuer: {
    url: "/dfbp-info-manage/issuer/getShortName",
    option: {
      value: "publisherCode",
      label: "fullNameCn",
    },
    params: {
      returnNum: 30,
    },
    resName: "publisher",
    method: "post",
  },
  // 投资单元
  investUnit: {
    url: "/dfbp-base-manage/api/investUnit/queryInvestUnitByUser",
    option: {
      value: "investUnitCode",
      label: "investUnitName",
    },
    method: "post",
  },
  fullLabelInvestUnit: {
    url: "/dfbp-base-manage/api/investUnit/queryInvestUnitByUser",
    option: {
      value: "investUnitCode",
      label: "investUnitName",
    },
    fullLabel: true,
    method: "post",
  },
  // 对手方
  counterparty: {
    url: "/dfbp-info-manage/rivalInfo/list",
    option: {
      label: "shortNameCn",
      value: "companyId",
    },
    method: "post",
  },
  // 债券交易方向
  bondTradeDirection: {
    url: "/dfbp-base-manage/tradeDirection/list",
    option: {
      label: "directionName",
      value: "directionCode",
    },
    method: "post",
    params: {
      businType: "YHXQ01",
    },
  },
  // 管理人
  consignor: {
    url: "/bmtp-product-manage/consignor/pullDownList",
    option: {
      value: "code",
      label: "fullNameCn",
    },
    method: "post",
  },
  // 机构
  institution: {
    url: "/bmtp-product-manage/product/product/getLevelTree",
    method: "post",
  },
  // 债券托管账户
  bondAccount: {
    url: "/bmtp-product-manage/account/bondAccount/getBondRefBatch",
    params: [],
    option: {
      value: "bondTrusteeshipAccountSn",
      label: "bondTrusteeshipName",
    },
    fullLabel: true,
    method: "post",
  },
  // 资金账户
  capitalAccount: {
    url: "/bmtp-product-manage/account/assetAccount/getAllAssetAccount",
    option: {
      value: "assetAccountSn",
      label: "assetAccountName",
    },
  },
};

/**功能权限 */
export const functionRolue = {
  查询: "QUERY", //查询
  新增: "ADD", //新增
  修改: "UPDATE", //修改
  删除: "DELETE", // 删除
  审核: "CHECK", //审核
  反审核: "UNCHECK", //反审核
  打印: "PRINT", //打印
  导入: "IMPORT", //导入
  导出: "EXPORT", //导出
  审批通过: "APPROVED", //审批通过
  审批拒绝: "APPROVED_REJECT", //  审批拒绝
  其他操作: "OTHER_OPERATION", //其他操作
};
