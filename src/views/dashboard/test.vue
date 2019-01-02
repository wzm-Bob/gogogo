<template>
  <div class="goDemo">
    <div id="mygoChart" style="width:1000px; height:600px; background-color: #ECA;"></div>
    <button @click="toBig">放大</button>
    <button @click="toSmall">缩小</button>
    <button @click="toFilt">自动</button>
  </div>
</template>
<script>
export default {
    mounted(){
    var mySelf = this;
    const MAKE = go.GraphObject.make;
      mySelf.myDiagram  = MAKE(go.Diagram, "mygoChart",{
      initialContentAlignment: go.Spot.Center, // 居中显示
      "undoManager.isEnabled": true ,// 支持 Ctrl-Z 和 Ctrl-Y 操作
      "toolManager.hoverDelay": 100,//tooltip提示显示延时
      "toolManager.toolTipDuration": 10000,//tooltip持续显示时间
      //isReadOnly:true,//只读
      "grid.visible":true,//显示网格
      allowMove:true,//允许拖动
      // allowDragOut:true,
      allowDelete:false,
      allowCopy:false,
      allowClipboard:false,
      "toolManager.mouseWheelBehavior": go.ToolManager.WheelZoom,//有鼠标滚轮事件放大和缩小，而不是向上和向下滚动
      layout:MAKE(go.TreeLayout,{
        angle: 0,
        layerSpacing: 35
        })
      });//构建gojs对象
      console.log(mySelf.myDiagram);
      mySelf.myDiagram.addDiagramListener("ObjectSingleClicked",function (e) {
        debugger
        console.log(e.subject.part);
          
      });
 
      mySelf.myDiagram.addDiagramListener("BackgroundSingleClicked",function (e) {
        debugger
        console.log("Double-clicked at" + e.diagram.lastInput.documentPoint);
      });
 
      mySelf.myDiagram.addDiagramListener("ClipboardPasted",function (e) {
        debugger
        console.log("Pasted" + e.diagram.selection.count + "parts");
      });
 
    // define a simple Node template
    // 定义个简单的 Node 模板
    mySelf.myDiagram.nodeTemplate =
      MAKE(go.Node,
      new go.Binding("location", "loc", go.Point.parse),
      MAKE(go.Shape, "RoundedRectangle", { fill: "#44CCFF",stroke: 'green',strokeWidth:2,angle:15 }),
      "Auto",//Vertical,Auto,Horizontal
        // 为整个Node背景设置为浅蓝色
        // { background: "#44CCFF" },
         
        // MAKE(go.Picture,
        //   // Pictures 应该指定宽高.
        //   // 当没有图片时显示红色的背景
        //   // 或者当图片为透明的时候也是.
        //   { source:"../assets/img/01.png",margin: 10, width: 50, height: 50, background: "red" },
        //   // Picture.source参数值与模型数据中的"source"字段绑定
        //   new go.Binding("source")),
        // MAKE(go.TextBlock,
        //   "Default Text",  // 初始化默认文本
        //   // 文字周围的空隙, 大号字体, 白色笔画:
        //   { margin: 12, stroke: "white", font: "bold 16px sans-serif",
        //     width:75,
        //     wrap: go.TextBlock.WrapDesiredSize
        //   },
        //   // TextBlock.text参数值与模型数据中的"name"字段绑定
        //   new go.Binding("text", "name1")),
          MAKE(go.Panel, "Horizontal",{padding:5},
            MAKE(go.Panel, "Vertical",
              MAKE(go.Picture,
                { margin: 10, width: 50, height: 50, background: "red" },
                new go.Binding("source","img")
              )
            ),
            MAKE(go.Panel, "Vertical",
              MAKE(go.TextBlock, "Default Text", {margin: 12, stroke: "white", font: "bold 16px sans-serif",},new go.Binding("text", "name1")),
              MAKE(go.TextBlock, { stroke: "red" },{margin: 5},new go.Binding("text", "name2")),
              MAKE(go.TextBlock, { background: "lightblue" },{margin: 5,},new go.Binding("text", "name3")),
            ),
          ),
          {
            mouseEnter:function(e,node,prev){
              console.log('mouseEnter');
            },
            mouseLeave:function(e,node,prev){
              mySelf.detailShow = false;
            },
          },
          {
            toolTip:MAKE(go.Adornment, "Spot",
              //{background:"transparent" },
              MAKE(go.Shape,"RoundedRectangle", {
                // fill: "blue" ,
                  height:30,
                  fill: MAKE(go.Brush, "Linear", { 0.0: "blue", 1.0: "red", start: go.Spot.Bottom, end: go.Spot.Top })
                }),
              MAKE(go.TextBlock,
              //{alignment:go.Spot.Top,alignmentFocus:go.Spot.Bottom,stroke:"red" },
              { margin: 4,stroke: "white" },new go.Binding("text", "name1"))
            )  // end of Adornment
          }
      );
      mySelf.myDiagram.linkTemplate = MAKE(go.Link,
        //{ curve: go.Link.Bezier },  // 贝塞尔曲线
        { routing: go.Link.Orthogonal, corner: 5 },
        MAKE(go.Shape, { strokeWidth: 2, stroke: "#e4393c" }),
        MAKE(go.Shape, { toArrow:"Standard",fill:"#000",stroke:null }),//箭头
        MAKE(go.TextBlock,
          {
            //margin: 20,
            stroke: "blue",
            //font: "14px sans-serif",
            //width:50,
            //wrap: go.TextBlock.WrapDesiredSize
          },
          new go.Binding("text", "linktext")),
          {
            toolTip:MAKE(go.Adornment, "Auto",
              MAKE(go.Shape, { fill: "#FFFFCC" }),
              MAKE(go.TextBlock, { margin: 4 },new go.Binding("text", "name1"))
            )  // end of Adornment
          }
        );// the link shape
    // let myModel = MAKE(go.Model);//如果不需要连线可以用这样的方法创建model
    // let myModel = MAKE(go.GraphLinksModel);//也可以创建link model;需要配置myModel.linkDataArray 如下
    let myModel = MAKE(go.TreeModel);
    myModel.nodeDataArray =
    [ // note that each node data object holds whatever properties it needs;
      // for this app we add the "name" and "source" properties
      {key:"1", name1: "董事长",name2: "秘书1", name3: "秘书2", img: require("../../assets/img/base-tzgg.png"), },
      {key:"2", parent:"1", name1: "秘书", name2: "秘书1", name3: "秘书2", linktext:"link", img: require("../../assets/img/base-gzrz.png") },
      {key:"3", parent:"1", name1: "CEO",  name2: "秘书1", name3: "秘书2", linktext:"link", img: require("../../assets/img/base-home.png") },
      {key:"4", parent:"3", name1: "总经理",  name2: "秘书1", name3: "秘书2", linktext:"link", img: require("../../assets/img/base-jcxx.png") },
      {key:"5", parent:"4", name1: "二狗子",  name2: "秘书1", name3: "秘书2", linktext:"link", img: require("../../assets/img/base-wtcl.png") },
    ];
    // myModel.linkDataArray = [
    //   {from:"1",to:"2"},
    //   {from:"1",to:"3"},
    //   {from:"1",to:"4"},
    //   {from:"1",to:"5"},
    // ];
    // function diagramInfo(myModel) {
    //   return "myModel:\n" + myModel.nodeDataArray.length + " nodes, " +myModel.linkDataArray.length + " links";
    // }
    // mySelf.myDiagram.toolTip = MAKE(go.Adornment, "Auto",
    //   MAKE(go.Shape, { fill: "#CCFFCC" }),
    //   MAKE(go.TextBlock, { margin: 4 },
    //     // use a converter to display information about the diagram model
    //     new go.Binding("text", "", diagramInfo))
    // );
    mySelf.myDiagram.model = myModel;
     
  }
}
</script>
