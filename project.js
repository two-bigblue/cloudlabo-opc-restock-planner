/* Application fields and sample data. MIT License. */
const SPEC={
  "id": "B05",
  "slug": "restock-planner",
  "name": "库存与补货试算台",
  "desc": "结合近期销量、采购周期和在途数量，测算库存天数与补货量。",
  "fields": [
    {
      "key": "window",
      "label": "近期销量统计天数",
      "type": "number",
      "value": 30,
      "min": 1
    },
    {
      "key": "safety",
      "label": "安全库存天数",
      "type": "number",
      "value": 7,
      "min": 0
    }
  ],
  "tables": [
    {
      "key": "items",
      "label": "商品库存",
      "columns": [
        {
          "key": "sku",
          "label": "SKU",
          "type": "text"
        },
        {
          "key": "stock",
          "label": "现货库存",
          "type": "number"
        },
        {
          "key": "sales",
          "label": "统计期销量",
          "type": "number"
        },
        {
          "key": "lead",
          "label": "采购周期（天）",
          "type": "number"
        },
        {
          "key": "incoming",
          "label": "周期内可到货数量",
          "type": "number"
        }
      ],
      "rows": [
        {
          "sku": "CUP01",
          "stock": 20,
          "sales": 60,
          "lead": 14,
          "incoming": 0
        },
        {
          "sku": "CUP02",
          "stock": 100,
          "sales": 30,
          "lead": 10,
          "incoming": 20
        }
      ]
    }
  ],
  "limits": "以近期日均销量线性估算，不预测促销、季节性；在途数量只填采购周期内可到货部分。",
  "dirname": "restock-planner",
  "example": {
    "_files": {},
    "window": 30,
    "safety": 7,
    "items": [
      {
        "sku": "CUP01",
        "stock": 20,
        "sales": 60,
        "lead": 14,
        "incoming": 0
      },
      {
        "sku": "CUP02",
        "stock": 100,
        "sales": 30,
        "lead": 10,
        "incoming": 20
      }
    ]
  },
  "inputTitle": "库存与销量",
  "outputTitle": "补货参考",
  "action": "计算补货量"
};
