// components/goods-item/goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsData:Object,
    itemIndex:Number,
    showStock:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:true,
    goods:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showList(){
      this.setData({
        show:!this.data.show
      })
    },
    onChange(e){
      var type = e.currentTarget.dataset.type;
      if (type =="parent"){
        this.data.goods.count = e.detail;
      } else if (type == "son"){
        this.data.goods.options[e.currentTarget.dataset.index].count = e.detail
      }
      this.triggerEvent("_onChange", {
        goods: this.data.goods,
        index: this.properties.itemIndex
      })
    }
  },
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached() {
      this.data.goods = this.properties.goodsData
    }
  }
})
