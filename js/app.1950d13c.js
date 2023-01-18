(function(){"use strict";var t={4893:function(t,e,s){var a=s(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav-bar"),e("router-view")],1)},r=[],i=function(){var t=this,e=t._self._c;return e("div",[e("b-navbar",{attrs:{type:"dark",variant:"info",sticky:""}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{staticClass:"logo",attrs:{src:t.logoURL,alt:""}})]),e("b-navbar-nav",[e("b-nav-item",{attrs:{to:""}},[t._v("Home")]),e("b-nav-item",{attrs:{to:"/content"}},[t._v("Content")]),e("b-nav-item",{attrs:{to:"/flashcards"}},[t._v("Study")]),e("b-nav-item",{attrs:{to:"/planner"}},[t._v("Planner")]),e("b-nav-item",{attrs:{to:"/statusExam"}},[t._v("Status Exam")]),e("b-nav-item",{attrs:{to:"/how-to"}},[t._v("Tutorial")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-img",t._b({staticClass:"mr-2",attrs:{rounded:"circle",src:t.profileURL}},"b-img",t.imgDimensions,!1)),e("b-nav-item-dropdown",{attrs:{src:t.profileURL,text:"User"}},[e("b-dropdown-item",[t._v("Edit Profile")]),e("b-dropdown-item",[t._v("Sign Out")])],1),e("b-nav-item",[t._v("Settings")])],1)],1)],1)},o=[],c={name:"NavBar",components:{},data(){return{logoURL:s(6148),profileURL:s(5239),imgDimensions:{height:50,width:50}}},computed:{},methods:{}},l=c,u=s(1001),d=(0,u.Z)(l,i,o,!1,null,null,null),m=d.exports,p={name:"App",components:{NavBar:m},data(){return{Message:"Great job!!"}},methods:{changeContent(){this.$refs.learn.changeList()}}},h=p,b=(0,u.Z)(h,n,r,!1,null,null,null),g=b.exports,f=s(2631),v=function(){var t=this,e=t._self._c;return e("div",[e("featured"),e("explore"),e("about")],1)},C=[],_=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"mt-5",attrs:{"align-h":"center"}},[e("h1",[t._v("Featured")])]),e("b-row",{staticClass:"mt-4 p-4 bg-light",attrs:{"align-h":"around"}},[e("b-card",{staticStyle:{"max-width":"20rem"},attrs:{title:"Planner","img-src":"https://www.techrepublic.com/wp-content/uploads/2022/07/only-display-outlook-calendar.jpeg","img-height":"50%","img-alt":"Biochemistry stock photo"}},[e("b-card-text",[e("p",[t._v("Create and update a custom planner for upcoming exams/projects")])]),e("router-link",{attrs:{to:"/planner"}},[e("b-button",{staticClass:"btn-md",attrs:{variant:"primary"}},[t._v("Planner")])],1)],1),e("b-card",{staticStyle:{"max-width":"20rem"},attrs:{title:"Flashcards","img-src":"https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/online%20classes.jpeg","img-alt":"Biochemistry stock photo","img-height":"50%"}},[e("b-card-text",[e("p",[t._v("Make some progress in your flashcard deck")])]),e("router-link",{attrs:{to:"/flashcards"}},[e("b-button",{staticClass:"btn-md",attrs:{variant:"primary"}},[t._v("Study ")])],1)],1),e("b-card",{staticStyle:{"max-width":"20rem"},attrs:{title:"Status Exam","img-src":"https://catalog.ndsu.edu/gallery/Biochem.jpg","img-height":"50%","img-alt":"Biochemistry stock photo"}},[e("b-card-text",[e("p",[t._v("Take a short assessment to analyze where you sit")])]),e("router-link",{attrs:{to:"/statusExam"}},[e("b-button",{staticClass:"btn-md",attrs:{variant:"primary"}},[t._v("Take Quiz")])],1)],1)],1)],1)},y=[],w={name:"HomeFeat",components:{},data(){return{}},computed:{},methods:{}},S=w,A=(0,u.Z)(S,_,y,!1,null,null,null),T=A.exports,x=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"mt-5",attrs:{"align-h":"center"}},[e("h1",[t._v("Explore Diagrams")])]),e("b-row",{attrs:{"align-h":"center"}},[e("b-carousel",{ref:"carousel",staticClass:"carousel",attrs:{id:"carousel-1",interval:0,controls:"","no-animation":"",indicators:"",background:""}},[e("b-carousel-slide",{attrs:{caption:"First Slide",text:"This is the first slide","img-src":"https://biologydictionary.net/wp-content/uploads/2020/03/Essential-amino-acid.jpg"}},[e("h1",[t._v("Amino acids")])]),e("b-carousel-slide",{attrs:{caption:"First Slide",text:"This is the first slide","img-src":"https://media.proprofs.com/images/QM/user_images/2503852/Glycolysis.jpg"}},[e("h1",[t._v("Amino acids")])]),e("b-carousel-slide",{attrs:{caption:"First Slide",text:"This is the first slide","img-src":"https://alevelnotes.com/static/content_images/AminoAcidball-labels.png"}},[e("h1",[t._v("Amino acids")])])],1)],1)],1)},k=[],R={name:"HomeExplorer",components:{},data(){return{}},computed:{},methods:{},mounted(){}},L=R,E=(0,u.Z)(L,x,k,!1,null,null,null),B=E.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"mt-5",attrs:{"align-h":"center"}},[e("h1",[t._v("About G-Science")])]),e("b-card",{staticClass:"mb-1 ml-5 mr-5",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-1",modifiers:{"accordion-1":!0}}],attrs:{block:"",variant:"info"}},[t._v(" "+t._s(t.firstSection.Title))])],1),e("b-collapse",{attrs:{id:"accordion-1",accodion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(" "+t._s(t.firstSection.Goal))]),e("b-card-text",[t._v(t._s(t.firstSection.History))])],1)],1),e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-2",modifiers:{"accordion-2":!0}}],attrs:{block:"",variant:"info"}},[t._v(" "+t._s(t.secondSection.Title))])],1),e("b-collapse",{attrs:{id:"accordion-2",accodion:"my-accordion",role:"tabpanel"}},[e("b-card-body",[e("b-card-text",[t._v(" "+t._s(t.secondSection.Description))])],1)],1),e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.accordion-3",modifiers:{"accordion-3":!0}}],attrs:{block:"",variant:"info"}},[t._v(" "+t._s(t.thirdSection.Title))])],1),e("b-collapse",{attrs:{id:"accordion-3",accodion:"my-accordion",role:"tabpanel"}},[e("b-card-body",t._l(t.thirdSection.LinksArray,(function(s){return e("b-card-text",{key:s.Id},[t._v(" "+t._s(s.Title)+", "+t._s(s.Link))])})),1)],1)],1)],1)},P=[],N={name:"about",components:{},data(){return{firstSection:{Title:"The Mission",Goal:"The goal of G-science is to create a place where students can learn about Biochemistry",History:"The website was started after saving up diagrams/notes by a tutor, Nick Gotsiridze, which was found useful by a lot of his students"},secondSection:{Title:"Meet the Creator",Description:"Hey there! I'm Nick Gotsy, and I started G-Science"},thirdSection:{Title:"Useful resources",LinksArray:[{Id:1,Title:"Link 1",Link:"https://link1"},{Id:2,Title:"Link 2",Link:"https://link2"},{Id:3,Title:"Link 3",Link:"https://link3"}]}}},computed:{},methods:{}},H=N,O=(0,u.Z)(H,D,P,!1,null,null,null),j=O.exports,I={name:"Home",components:{Featured:T,Explore:B,About:j},data(){return{}},computed:{},methods:{}},$=I,U=(0,u.Z)($,v,C,!1,null,null,null),M=U.exports,Q=function(){var t=this,e=t._self._c;return e("div",[e("b-progress",{attrs:{max:t.progressBar.max,height:"rem","show-progress":""}},[e("b-progress-bar",{attrs:{value:t.progressBar.value}},[t.progressBar.value!=t.progressBar.max?e("span",[t._v("Progress: "+t._s(t.progressBar.value)+" / "+t._s(t.progressBar.max))]):t._e(),t.progressBar.value==t.progressBar.max?e("span",[t._v("Completed!")]):t._e()])],1),t._l(t.$store.state.pretest,(function(s,a){return e("b-container",{key:a,staticClass:"d-flex justify-content-center"},[a!=t.$store.state.currentQuestion||t.$store.state.isResultsDisplayed?t._e():e("b-card",{staticClass:"mb-5 shadow",staticStyle:{width:"40%",height:"45rem"},attrs:{"img-src":s.imgsrc,"img-alt":s.imgalt,"img-top":"",title:s.title}},[e("b-card-text",[e("p",[t._v(" Current score: "+t._s(t.$store.state.correctAttempts)+"/"+t._s(t.$store.state.totalAttempts)+" ")]),e("p",{staticClass:"statement"},[t._v(t._s(s.statement))]),e("p",{staticClass:"d-none correct"},[t._v(t._s(t.$store.state.correctMsg))]),e("p",{staticClass:"d-none incorrect"},[t._v(t._s(t.$store.state.incorrectMsg))]),e("b-container",{staticClass:"d-flex justify-content-between"},[e("b-button",{class:{"d-none":s.isBackContHidden},attrs:{disabled:s.isBackDisabled},on:{click:function(e){return t.decCurrentQuestion()}}},[t._v("Back")]),e("b-badge",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:s.explanation,expression:"question.explanation",modifiers:{hover:!0,top:!0}}],staticClass:"p-3",class:{"d-none":s.isBackContHidden},attrs:{title:s.topic,pill:"",variant:"info"}},[t._v("Explanation")]),a!=t.$store.state.pretest.length-1?e("b-button",{class:{"d-none":s.isBackContHidden},attrs:{disabled:s.isForwardDisabled},on:{click:function(e){t.incCurrentQuestion(),t.progressBar.value++}}},[t._v("Continue")]):t._e(),a==t.$store.state.pretest.length-1?e("b-button",{class:{"d-none":s.isBackContHidden},on:{click:function(e){t.displayResults(),t.progressBar.value++}}},[t._v("Results")]):t._e()],1)],1),e("b-container",{staticClass:"border d-flex justify-content-around flex-wrap",staticStyle:{height:"60%"}},[e("b-col",t._l(s.choices,(function(a,n){return e("div",{key:a.name},[n>=2?e("b-button",{staticClass:"mt-3",class:{"bg-success":a.correct&&s.displayAnswers,"font-weight-bolder":a.correct&&s.displayAnswers},staticStyle:{height:"30%",width:"80%"},attrs:{disabled:s.displayAnswers,variant:"primary"},on:{click:function(e){t.displayAnswer(s),t.disableBack(s),t.displayMessage(s,e)}}},[t._v(t._s(a.name))]):t._e()],1)})),0),e("b-col",t._l(s.choices,(function(a,n){return e("div",{key:a.name},[n<2?e("b-button",{staticClass:"mt-3",class:{"bg-success":a.correct&&s.displayAnswers},staticStyle:{height:"30%",width:"80%"},attrs:{disabled:s.displayAnswers,variant:"primary"},on:{click:function(e){t.displayAnswer(s),t.disableBack(s),t.displayMessage(s,e)}}},[t._v(t._s(a.name))]):t._e()],1)})),0)],1)],1)],1)})),t.$store.state.isResultsDisplayed?e("b-container",{staticClass:"d-flex justify-content-center"},[e("b-card",{attrs:{"body-class":"text-center","header-tag":"nav"},scopedSlots:t._u([{key:"header",fn:function(){return[e("b-nav",{attrs:{"card-header":"",tabs:""}},[e("b-nav-item",{attrs:{active:0==t.$store.state.currentResultsTab},on:{click:function(e){return t.goToResultTab(e)}}},[t._v("Score")]),e("b-nav-item",{attrs:{active:1==t.$store.state.currentResultsTab},on:{click:function(e){return t.goToResultTab(e)}}},[t._v("Stats")])],1)]},proxy:!0}],null,!1,856279082)},t._l(t.$store.state.results,(function(s,a){return e("b-container",{key:a},[a==t.$store.state.currentResultsTab?e("b-card-body",[e("b-card-title",[t._v(" "+t._s(s.name)+" ")]),e("b-card-text",["Score"===s.name?e("pie-score"):t._e(),"Stats"===s.name?e("bar-stats"):t._e()],1)],1):t._e()],1)})),1)],1):t._e()],2)},Z=[],F=function(){var t=this,e=t._self._c;return e("Pie",{attrs:{id:"chartId",options:t.chartOptions,data:t.chartData}})},G=[],W=s(5866),Y=s(9646);Y.kL.register(Y.Dx,Y.u,Y.De,Y.qi,Y.uw);var V={name:"PieChart",components:{Pie:W.by},data(){return{chartData:{labels:["Correct","Incorrect"],datasets:[{backgroundColor:["#41B883","#E46651"],data:[this.$store.getters.getPercentCorrect,this.$store.getters.getPercentIncorrect]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1}}}},z=V,K=(0,u.Z)(z,F,G,!1,null,null,null),q=K.exports,J=function(){var t=this,e=t._self._c;return e("Bar",{attrs:{id:"my-chart-id",options:t.chartOptions,data:t.chartData}})},X=[];Y.kL.register(Y.Dx,Y.u,Y.De,Y.ZL,Y.uw,Y.f$);var tt={name:"PreTestResults",components:{Bar:W.$Q},data(){return{chartData:{labels:this.$store.getters.getPretestCategories,datasets:[{label:"score",data:this.$store.getters.getPretestValues,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgb(54, 162, 235)",borderWidth:1}]},chartOptions:{responsive:!0,indexAxis:"y"}}}},et=tt,st=(0,u.Z)(et,J,X,!1,null,null,null),at=st.exports,nt=s(4806),rt={name:"PreTest",components:{BarStats:at,PieScore:q},data(){return{progressBar:{max:this.$store.state.pretest.length,value:0}}},computed:{},beforeCreate(){},created(){},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},methods:{displayAnswer(t){console.log((0,nt.random)(0,5)),this.$store.commit("DISPLAY_ANSWERS",t)},displayBackCont(t){this.$store.commit("DISPLAY_BACK_CONTINUE",t)},disableBack(t){0==this.$store.state.pretest.indexOf(t)&&this.$store.commit("DISABLE_BACK",t)},displayMessage(t,e){this.updateAttemptsScore(),this.displayBackCont(t);const s=e.target,a=s.parentElement.parentElement.parentElement.previousSibling;if(s.textContent==t.answer){for(const t of a.children)t.classList.contains("statement")&&t.classList.add("d-none"),t.classList.contains("correct")&&t.classList.remove("d-none");this.setAnsweredCorrect(t),this.updateCorrectScore()}else{for(const t of a.children)t.classList.contains("statement")&&t.classList.add("d-none"),t.classList.contains("incorrect")&&t.classList.remove("d-none");this.setAnsweredIncorrect(t)}},setAnsweredCorrect(t){this.$store.commit("SET_ANSWERED_CORRECT",t)},setAnsweredIncorrect(t){this.$store.commit("SET_ANSWERED_INCORRECT",t)},updateCorrectScore(){this.$store.commit("UPDATE_CORRECT_SCORE")},updateAttemptsScore(){this.$store.commit("UPDATE_ATTEMPTS_SCORE")},incCurrentQuestion(){this.$store.commit("INCREASE_CURRENT_QUESTION")},decCurrentQuestion(){this.$store.commit("DECREASE_CURRENT_QUESTION")},displayResults(){this.$store.commit("DISPLAY_RESULTS")},goToResultTab(t){this.$store.commit("GO_TO_RESULT_TAB",t)}}},it=rt,ot=(0,u.Z)(it,Q,Z,!1,null,null,null),ct=ot.exports,lt=function(){var t=this,e=t._self._c;return e("div",[e("flashcards")],1)},ut=[],dt=function(){var t=this,e=t._self._c;return e("div")},mt=[],pt={name:"FlashCards",components:{},data(){return{}},computed:{},methods:{}},ht=pt,bt=(0,u.Z)(ht,dt,mt,!1,null,null,null),gt=bt.exports,ft={name:"FlashCards",components:{Flashcards:gt},data(){return{}},computed:{},methods:{}},vt=ft,Ct=(0,u.Z)(vt,lt,ut,!1,null,null,null),_t=Ct.exports,yt=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"vh-100"},[e("b-row",{staticClass:"h-100"},[e("b-col",[e("b-row",{staticClass:"h-100",attrs:{"align-v":"center"}},[e("b-col",[e("planner-to-dos")],1)],1)],1),e("b-col",[e("b-row",{staticClass:"h-50",attrs:{"align-v":"center"}},[e("b-col",[e("planner-calendar")],1)],1),e("b-row",{staticClass:"h-50",attrs:{"align-v":"center"}},[e("b-col",[e("planner-listing")],1)],1)],1)],1)],1)},wt=[],St=function(){var t=this,e=t._self._c;return e("div",[t._v(" "+t._s(t.text)+" ")])},At=[],Tt={name:"PlannerCalendar",components:{},data(){return{text:"This is the calendar"}},computed:{},methods:{}},xt=Tt,kt=(0,u.Z)(xt,St,At,!1,null,null,null),Rt=kt.exports,Lt=function(){var t=this,e=t._self._c;return e("div",[t._v(" "+t._s(t.text)+" ")])},Et=[],Bt={name:"PlannerListing",components:{},data(){return{text:"This is the listing"}},computed:{},methods:{}},Dt=Bt,Pt=(0,u.Z)(Dt,Lt,Et,!1,null,null,null),Nt=Pt.exports,Ht=function(){var t=this,e=t._self._c;return e("div",[t._v(" "+t._s(t.text)+" ")])},Ot=[],jt={name:"PlannerToDo",components:{},data(){return{text:"This is the todos"}},computed:{},methods:{}},It=jt,$t=(0,u.Z)(It,Ht,Ot,!1,null,null,null),Ut=$t.exports,Mt={name:"Planner",components:{PlannerCalendar:Rt,PlannerListing:Nt,PlannerToDos:Ut},data(){return{}},computed:{},methods:{}},Qt=Mt,Zt=(0,u.Z)(Qt,yt,wt,!1,null,null,null),Ft=Zt.exports,Gt=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{staticClass:"mt-5",attrs:{"align-h":"center"}}),e("b-row",[e("b-col",{attrs:{cols:"2"}},[e("b-row",[e("content-nav")],1)],1),e("b-col",[e("content-main")],1)],1)],1)},Wt=[],Yt=function(){var t=this,e=t._self._c;return e("div",[e("b-container",[e("b-row",{staticClass:"mt-2"},[e("b-col",[t._v("This is some content")]),e("b-col",[t._v("This is more content")]),e("b-col",[t._v("This is even more content")])],1),e("b-row",{staticClass:"mt-5"},[e("b-col",[t._v("This is some content")]),e("b-col",[t._v("This is more content")]),e("b-col",[t._v("This is even more content")])],1)],1)],1)},Vt=[],zt={name:"ContentMain",components:{},data(){return{}},computed:{},methods:{}},Kt=zt,qt=(0,u.Z)(Kt,Yt,Vt,!1,null,null,null),Jt=qt.exports,Xt=function(){var t=this,e=t._self._c;return e("div",[e("b-card",{class:{compact_card:t.isCompact}},[e("b-navbar",[e("b-navbar-nav",[e("b-form-input",{directives:[{name:"show",rawName:"v-show",value:!t.isCompact,expression:"!isCompact"}],staticClass:"ml-4 col-6",attrs:{placeholder:"Search"},model:{value:t.Search,callback:function(e){t.Search=e},expression:"Search"}}),e("b-form-input",{directives:[{name:"show",rawName:"v-show",value:t.isCompact,expression:"isCompact"}],staticClass:"ml-2 col-6",attrs:{placeholder:"Search"},model:{value:t.Search,callback:function(e){t.Search=e},expression:"Search"}}),e("b-button",{staticClass:"ml-1",attrs:{variant:"outline-secondary",size:"sm",type:"Submit"}},[t._v("Search")])],1)],1),e("b-button",{staticClass:"col-7 mb-2",attrs:{pressed:t.isCompact,variant:"outline-info"},on:{"update:pressed":function(e){t.isCompact=e}}},[t._v("Menu")]),t._l(t.filteredChapters,(function(s){return e("b-card",{key:s.Number},[e("b-card-header",[e("b-button",{attrs:{variant:"outline-secondary"}},[e("h4",{class:{compact_chapters:t.isCompact}},[t._v(t._s(s.Number))])])],1),e("b-card-body",[e("b-card-title",[t._v(t._s(s.Title))]),e("b-card-text",{directives:[{name:"show",rawName:"v-show",value:!t.isCompact,expression:"!isCompact"}]},[t._v(t._s(s.Description))])],1),t._l(s.ChapterItems,(function(s){return e("b-list-group",{key:s},[e("b-list-group-item",[t._v(" "+t._s(s)+" ")])],1)}))],2)}))],2)],1)},te=[],ee={name:"ContentNav",components:{},data(){return{isCompact:!1,Chapters:[{Number:"Chapter 1",Title:"Amino Acids",Description:"Learning the structure, behavior, and functionality of the essential Amino Acids",ChapterItems:["Structure","Behavior","Functionality"]},{Number:"Chapter 2",Title:"Tacos",Description:"Tacos are the best",ChapterItems:["Wheat","Corn","Multigrain"]},{Number:"Chapter 3",Title:"Burritos",Description:"Burritos come at a close second",ChapterItems:["Beef","Chicken","Salsa"]}],Search:""}},computed:{filteredChapters:function(){return this.Chapters.filter((t=>t.Title.toLowerCase().match(this.Search.toLowerCase())||t.Description.toLowerCase().match(this.Search.toLowerCase())||t.ChapterItems.toString().toLowerCase().match(this.Search.toLowerCase())))}},methods:{}},se=ee,ae=(0,u.Z)(se,Xt,te,!1,null,null,null),ne=ae.exports,re={name:"Content",components:{ContentMain:Jt,ContentNav:ne},data(){return{displayNav:2,CollapseDisplay:"Hide Nav"}},computed:{},methods:{NavToggle(){this.displayNav++,this.displayNav%2!=0?this.CollapseDisplay="Show Nav":this.CollapseDisplay="Hide Nav"}}},ie=re,oe=(0,u.Z)(ie,Gt,Wt,!1,null,null,null),ce=oe.exports,le=function(){var t=this,e=t._self._c;return e("div",[e("how-to-main")],1)},ue=[],de=function(){var t=this,e=t._self._c;return e("div",[e("b-row",{attrs:{"align-h":"center"}},[e("h1",[t._v("How To")])])],1)},me=[],pe={name:"HowToMain",components:{},data(){return{}},computed:{},methods:{}},he=pe,be=(0,u.Z)(he,de,me,!1,null,null,null),ge=be.exports,fe={name:"template",components:{HowToMain:ge},data(){return{}},computed:{},methods:{}},ve=fe,Ce=(0,u.Z)(ve,le,ue,!1,null,null,null),_e=Ce.exports;a["default"].use(f.Z);const ye=new f.Z({mode:"history",base:"/",routes:[{path:"/",name:"Welcome",component:M},{path:"/statusExam",name:"Status",component:ct},{path:"/flashcards",name:"Flashcards",component:_t},{path:"/planner",name:"Planner",component:Ft},{path:"/content",name:"Content",component:ce},{path:"/how-to",name:"How-to",component:_e}]});var we=ye,Se=s(3822);a["default"].use(Se.ZP);var Ae=new Se.ZP.Store({state:{correctMsg:"Nice Work!",incorrectMsg:"Better luck next time...",completed:!1,correctAttempts:0,totalAttempts:0,currentQuestion:0,currentResultsTab:0,isResultsDisplayed:!1,pretest:[{title:"Question 1",topic:"Amino Acids",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 2",topic:"Amino Acids",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"http://clearlyexplained.com/_Media/754px-citric_acid_cycle_wit_med_hr.png",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 3",topic:"Acid-Bases",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 4",topic:"Acid-Bases",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 5",topic:"Metabolism",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 6",topic:"Metabolism",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 7",topic:"Unit Conversion",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 8",topic:"Unit Conversion",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 9",topic:"Thermodynamics",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]},{title:"Question 10",topic:"Thermodynamics",explanation:"Lysine is a base that contains and R-group that consists of an amine followed by four carbons",statement:"What is this amino acid?",imgsrc:"https://assets.fishersci.com/TFS-Assets/CCG/Chemical-Structures/chemical-structure-cas-56-87-1.jpg-650.jpg",imgalt:"An amino acid with following R-group: 4-carbons + amine group",displayAnswers:!1,isBackContHidden:!0,isBackDisabled:!1,isAnsweredCorrect:null,answer:"Lysine",choices:[{name:"Cysteine",correct:!1},{name:"Arginine",correct:!1},{name:"Lysine",correct:!0},{name:"Histidine",correct:!1}]}],results:[{name:"Score",description:"This is your score"},{name:"Stats",description:"This is your stats"}]},getters:{getPercentCorrect(t){const e=t.correctAttempts/t.totalAttempts*100;return console.log(e),e},getPercentIncorrect(t,e){const s=100-e.getPercentCorrect;return s},getPretestCategoriesValues(t){const e=t.pretest.map((t=>t.topic)),s=[...new Set(e)];let a=s.map((t=>({name:t,value:0})));return t.pretest.forEach((t=>{a.forEach((e=>{e.name==t.topic&&t.isAnsweredCorrect&&e.value++}))})),a},getPretestCategories(t,e){const s=e.getPretestCategoriesValues,a=s.map((t=>t.name));return a},getPretestValues(t,e){const s=e.getPretestCategoriesValues,a=s.map((t=>t.value));return a}},mutations:{DISPLAY_ANSWERS(t,e){e.displayAnswers=!0},UPDATE_CORRECT_SCORE(t){t.correctAttempts++},UPDATE_ATTEMPTS_SCORE(t){t.totalAttempts++},INCREASE_CURRENT_QUESTION(t){t.currentQuestion<t.pretest.length-1&&t.currentQuestion++},DECREASE_CURRENT_QUESTION(t){t.currentQuestion>0&&t.currentQuestion--},DISPLAY_BACK_CONTINUE(t,e){e.isBackContHidden=!e.isBackContHidden},DISABLE_BACK(t,e){e.isBackDisabled=!0},DISPLAY_RESULTS(t){t.isResultsDisplayed=!0},GO_TO_RESULT_TAB(t,e){"Score"==e.target.textContent&&(t.currentResultsTab=0),"Stats"==e.target.textContent&&(t.currentResultsTab=1)},SET_ANSWERED_CORRECT(t,e){e.isAnsweredCorrect=!0},SET_ANSWERED_INCORRECT(t,e){e.isAnsweredCorrect=!1}},actions:{},modules:{}}),Te=(s(2742),s(784),s(6882));s(7024);a["default"].use(Te.ZPm),a["default"].config.productionTip=!1,new a["default"]({router:we,store:Ae,render:t=>t(g)}).$mount("#app")},6148:function(t,e,s){t.exports=s.p+"img/Logo.e9488645.png"},5239:function(t,e,s){t.exports=s.p+"img/Profile.f15b1ce2.png"}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){var t=[];s.O=function(e,a,n,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[c])}))?a.splice(c--,1):(o=!1,r<i&&(i=r));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],o=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var u=c(s)}for(e&&e(a);l<i.length;l++)r=i[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},a=self["webpackChunkbiochem_site"]=self["webpackChunkbiochem_site"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(4893)}));a=s.O(a)})();
//# sourceMappingURL=app.1950d13c.js.map