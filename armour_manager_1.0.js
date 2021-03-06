//Armour Manager ~ BeATz-UnKNoWN
var starterUI, armourUI, armourSetUI;
var armourSlot = "None";
var armourSlot1 = "None";
var armourSlot2 = "None";
var armourSlot3 = "None";

function newLevel(){
	start();
}

function start(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var starterLayout = new android.widget.LinearLayout(ctx);
			starterLayout.setOrientation(0);
			
			var starter = new android.widget.Button(ctx);
			starter.setText("A");
			starter.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourMenu();
					starterUI.dismiss();
				}
			}));
			starterLayout.addView(starter);
			
			starterUI = new android.widget.PopupWindow(starterLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			starterUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			starterUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}catch(error){
			print("The button could not be displayed, because: " + error);
		}
	}}));
}

function armourMenu(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var armourLayout = new android.widget.LinearLayout(ctx);
			armourLayout.setOrientation(1);
			
			var heading = new android.widget.TextView(ctx);
			heading.setTextSize(24);
			heading.setText("Armour Menu");
			armourLayout.addView(heading);
			
			var helmet = new android.widget.Button(ctx);
			helmet.setText("Helmet: " + armourSlot);
			helmet.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourSetMenu("helmet", 0, 298, 302, 306, 310, 314);
					armourUI.dismiss();
				}
			}));
			armourLayout.addView(helmet);
			
			var chestplate = new android.widget.Button(ctx);
			chestplate.setText("Chestplate: " + armourSlot1);
			chestplate.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourSetMenu("chestplate", 1, 299, 303, 307, 311, 315);
					armourUI.dismiss();
				}
			}));
			armourLayout.addView(chestplate);
			
			var leggings = new android.widget.Button(ctx);
			leggings.setText("Leggings: " + armourSlot2);
			leggings.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourSetMenu("leggings", 2, 300, 304, 308, 312, 316);
					armourUI.dismiss();
				}
			}));
			armourLayout.addView(leggings);
			
			var boots = new android.widget.Button(ctx);
			boots.setText("Boots: " + armourSlot3);
			boots.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourSetMenu("boots", 3, 301, 305, 309, 313, 317);
					armourUI.dismiss();
				}
			}));
			armourLayout.addView(boots);
			
			var closeBtn = new android.widget.Button(ctx);
			closeBtn.setText("Close");
			closeBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourUI.dismiss();
					start();
				}
			}));
			armourLayout.addView(closeBtn);
			
			armourUI = new android.widget.PopupWindow(armourLayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			armourUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			armourUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(err){
			print("The armour menu could not be displayed, because: " + err);
		}
	}}));
}

function armourSetMenu(type, slotNumber, leather, chainmail, iron, diamond, gold){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var armourSetLayout = new android.widget.LinearLayout(ctx);
			var armourSetScroll = new android.widget.ScrollView(ctx);
			var armourSetLayout1 = new android.widget.LinearLayout (ctx);
			armourSetLayout.setOrientation(1);
			armourSetLayout1.setOrientation(1);
			armourSetScroll.addView(armourSetLayout);
			armourSetLayout1.addView(armourSetScroll);
			
			var heading = new android.widget.TextView(ctx);
			heading.setTextSize(20);
			heading.setText("Change your " + type + " to...");
			armourSetLayout.addView(heading);
			
			var leatherArmour = new android.widget.Button(ctx);
			leatherArmour.setText("Leather");
			leatherArmour.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setArmorSlot(slotNumber, leather);
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(leatherArmour);
			
			var chainmailArmour = new android.widget.Button(ctx);
			chainmailArmour.setText("Chainmail");
			chainmailArmour.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setArmorSlot(slotNumber, chainmail);
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(chainmailArmour);
			
			var ironArmour = new android.widget.Button(ctx);
			ironArmour.setText("Iron");
			ironArmour.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setArmorSlot(slotNumber, iron);
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(ironArmour);
			
			var diamondArmour = new android.widget.Button(ctx);
			diamondArmour.setText("Diamond");
			diamondArmour.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setArmorSlot(slotNumber, diamond);
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(diamondArmour);
			
			var goldArmour = new android.widget.Button(ctx);
			goldArmour.setText("Gold");
			goldArmour.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setArmorSlot(slotNumber, gold);
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(goldArmour);
			
			var closeBtn = new android.widget.Button(ctx);
			closeBtn.setText("Close");
			closeBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					armourMenu();
					armourSetUI.dismiss();
				}
			}));
			armourSetLayout.addView(closeBtn);
			
			armourSetUI = new android.widget.PopupWindow(armourSetLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			armourSetUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			armourSetUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(mistake){
			print("The armour set menu could not be displayed, because: " + mistake);
		}
	}}));
}

function leaveGame(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(starterUI != null){
			starterUI.dismiss();
			starterUI = null;
		}
		if(armourUI != null){
			armourUI.dismiss();
			armourUI = null;
		}
		if(armourSetUI != null){
			armourSetUI.dismiss();
			armourSetUI = null;
		}
	}}));
}

function modTick(){
	if(Player.getArmorSlot(0)==298){
		armourSlot = "Leather";
	}
	else if(Player.getArmorSlot(0)==302){
		armourSlot = "Chainmail";
	}
	else if(Player.getArmorSlot(0)==306){
		armourSlot = "Iron";
	}
	else if(Player.getArmorSlot(0)==310){
		armourSlot = "Diamond";
	}
	else if(Player.getArmorSlot(0)==314){
		armourSlot = "Gold";
	}
	else if(Player.getArmorSlot(0)==0){
		armourSlot = "None";
	}
	if(Player.getArmorSlot(1)==299){
		armourSlot1 = "Leather";
	}
	else if(Player.getArmorSlot(1)==303){
		armourSlot1 = "Chainmail";
	}
	else if(Player.getArmorSlot(1)==307){
		armourSlot1 = "Iron";
	}
	else if(Player.getArmorSlot(1)==311){
		armourSlot1 = "Diamond";
	}
	else if(Player.getArmorSlot(1)==315){
		armourSlot1 = "Gold";
	}
	else if(Player.getArmorSlot(1)==0){
		armourSlot1 = "None";
	}
	if(Player.getArmorSlot(2)==300){
		armourSlot2 = "Leather";
	}
	else if(Player.getArmorSlot(2)==304){
		armourSlot2 = "Chainmail";
	}
	else if(Player.getArmorSlot(2)==308){
		armourSlot2 = "Iron";
	}
	else if(Player.getArmorSlot(2)==312){
		armourSlot2 = "Diamond";
	}
	else if(Player.getArmorSlot(2)==316){
		armourSlot2 = "Gold";
	}
	else if(Player.getArmorSlot(2)==0){
		armourSlot2 = "None";
	}
	if(Player.getArmorSlot(3)==301){
		armourSlot3 = "Leather";
	}
	else if(Player.getArmorSlot(3)==305){
		armourSlot3 = "Chainmail";
	}
	else if(Player.getArmorSlot(3)==309){
		armourSlot3 = "Iron";
	}
	else if(Player.getArmorSlot(3)==313){
		armourSlot3 = "Diamond";
	}
	else if(Player.getArmorSlot(3)==317){
		armourSlot3 = "Gold";
	}
	else if(Player.getArmorSlot(3)==0){
		armourSlot3 = "None";
	}
}
