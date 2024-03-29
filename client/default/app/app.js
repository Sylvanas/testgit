Ext.application({
		phoneStartupScreen: 'resources/img/loading.png',
		name: 'App',  
	
		views : [
		         'LoadingView',
		         'LoginView',
		         'RegisterView', 
		         'HomeView',
		         'AccountView',
		         'ConfigurationView', 
		         'ChangePasswordView',
		         'ManageRequestsView',
		         'SoundAlertView', 
		         'ChangeLanguageView',
		         'EditRequestView',
		         'SelectFriendView', 
		         'MapView',
		         'SendFriendRequestView', 
		         ],
		controllers: [
					  'Login',
				      'Register',
		              'Home',
		              'Account',
		              'Configuration',
		              'ChangePassword',
		              'ManageRequests',
		              'SoundAlert',
		              'ChangeLanguage',
		              'EditRequest',
		              'SelectFriend',
		              'Map',
		              'SendFriendRequest',
		              ],
		models: [
	             'EditRequest',
	             'HourList',
	             'Languages',
	             'Map',
	             'Requests',
	             'SelectFriend',
	             ],
		stores : [
		             'EditRequest',
		             'HourListEnd',
		             'HourListStart',
		             'Languages',
		             'Map',
		             'Requests',
		             'SelectFriend',
		             ],
		initialize: function () {
			this.callParent();
		},	
		launch: function() {
			App.mainView = Ext.create('Ext.Panel', {
				id: 'appContainer',
			    fullscreen: true,
			    layout: 'card',
				items: [
				    { xtype: 'LoadingView' },
				    { xtype: 'LoginView' },
				    { xtype: 'RegisterView' },
	                { xtype: 'HomeView' },
	                { xtype: 'AccountView' },
	                { xtype: 'ConfigurationView' },
	                { xtype: 'ChangePasswordView' },
	                { xtype: 'ManageRequestsView' },
	                { xtype: 'SoundAlertView' },
	                { xtype: 'ChangeLanguageView' },
	                { xtype: 'EditRequestView' },
	                { xtype: 'SelectFriendView' },
	                { xtype: 'MapView' },
	                { xtype: 'SendFriendRequestView' },
	            ]
			});
			this.startApp();
	    },
	    
	    startApp: function() {
	    	//App.mainView.setActiveItem(0);
	    	App.Global = Ext.create('Global');
	    	try{
	    		$fh.act({
	    		      act : 'CloudTestFunction',
	    		    }, function(res) {
	    		    	App.Global.loadStores();
	    		    	App.Global.setLocalstoreValues();
	    		    	App.Global.setAlertHoursDisable(App.Global.getLocalValue('alertHours'));
	    				App.Global.startSendingGeoData();
	    		    });
	    	}catch(err){
	    		App.Global.releaseCode = false;
	    		App.Global.setLocalValues();
	    		App.Global.setAlertHoursDisable(App.Global.getLocalValue('alertHours'));
	    		App.Global.goToFirstView();
	    	}
	    },

	});