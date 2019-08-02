sap.ui.controller("controllers.Home",{
	
	gotoPage2 : function(){
		//write code for navigation to page2
		
		var myHomeView = this.getView();
		
		var oApp = myHomeView.getParent();
		
		oApp.to("view2");
		
	}
})