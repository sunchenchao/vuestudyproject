import {request} from "./request";
export function getGoodDetail(iid) {

    return request({
        url: '/detail',
        params: {
            iid 
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title; //标题---
        this.newPrice = itemInfo.price; //新价格
        this.oldPrice = itemInfo.oldPrice; //老价格
        this.discountDesc = itemInfo.discountDesc; //折扣活动
        this.descColor = itemInfo.discountBgColor; //折扣活动的背景颜色
        this.columns = columns; //销量、收藏,只取0和1
        this.services = services; //在shopInfo的services的第3索引号对应七天无理由退货
        this.desc = itemInfo.desc; //描述---
        this.realPrice = itemInfo.lowPrice; //价格---
        this.image = itemInfo.topImages[0]; //图片---
    }
}

// 2、店铺信息的数据获取
export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name;
        this.logo = shopInfo.shopLogo;
        this.sells = shopInfo.cSells;
        this.goods = shopInfo.cGoods;
        this.score = shopInfo.score;
        this.shopUrl = shopInfo.shopUrl;
    }
}

// 3、店铺尺码信息获取
export class GoodsParam {
    constructor(info, rule = "") {
        this.info = info.set; //一些参数信息
        this.sizes = rule.tables; //尺码信息
        this.images = info.images ? info.images : "";
    }
}
