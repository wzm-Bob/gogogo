<template>
  <div class="goDemo">
  <div id="myDiagramDiv"
     style="width:800px; height:550px; background-color: #DAE4E4;margin:0 auto"></div>
  </div>
</template>
<script>
/* https://liuxiaofan.com/2018/03/16/3521.html */
export default {
    mounted(){
      var $ = go.GraphObject.make;

var myDiagram =
  $(go.Diagram, "myDiagramDiv",
    {
      initialContentAlignment: go.Spot.Center, // 居中显示内容
      "undoManager.isEnabled": true, // 打开 Ctrl-Z 和 Ctrl-Y 撤销重做功能
      layout: $(go.TreeLayout, // 1个特殊的树形排列 Diagram.layout布局
                { angle: 90, layerSpacing: 35 })
    });

// 我们早先定义的模板
myDiagram.nodeTemplate =
  $(go.Node, "Horizontal",
    { background: "#44CCFF" },
    $(go.Picture,
      { margin: 10, width: 50, height: 50, background: "red" },
      new go.Binding("source")),
    $(go.TextBlock, "Default Text",
      { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
      new go.Binding("text", "name"))
  );

// 定义一个直角路由形式的连线模板, 去掉箭头
myDiagram.linkTemplate =
  $(go.Link,
    { routing: go.Link.Orthogonal, corner: 5 },
    $(go.Shape, { strokeWidth: 3, stroke: "#555" })); // the link shape

var model = $(go.TreeModel);
model.nodeDataArray =
[
  { key: "1",              name: "Don Meow",   source: "cat1.png" },
  { key: "2", parent: "1", name: "Demeter",    source: "cat2.png" },
  { key: "3", parent: "1", name: "Copricat",   source: "cat3.png" },
  { key: "4", parent: "3", name: "Jellylorum", source: "cat4.png" },
  { key: "5", parent: "3", name: "Alonzo",     source: "cat5.png" },
  { key: "6", parent: "2", name: "Munkustrap", source: "cat6.png" }
];
myDiagram.model = model;
    }
}
</script>
