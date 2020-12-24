const data = {
	parts: [
		{
			name: "Bearing",
			fileName: [
				require("./Assets/Images/Parts/Bearing1.jpg"),
				require("./Assets/Images/Parts/Bearing2.jpg"),
				require("./Assets/Images/Parts/Bearing3.jpg"),
			],
			description: "Reduces friction between moving parts and stationary parts, such as between shafts and gussets.  Bearings come in different sizes, and come in both hex and circular shapes.",
			found: "Autoshop - Bearing Bin",
			link: "https://www.vexrobotics.com/bearings.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Belts",
			fileName: [
				require("./Assets/Images/Parts/Belts1.jpg"),
				require("./Assets/Images/Parts/Belts2.jpg")
			],
			description: "Belts are a loop of flexible material used to link two or more pulleys.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/gt2-timingbelts.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Bolts",
			fileName: [
				require("./Assets/Images/Parts/Bolts1.jpg"),
				require("./Assets/Images/Parts/Bolts2.jpg")
			],
			description: "Bolts are fasteners used to keep two objects in a fixed position. Bolts come in different lengths and widths. The widths are designated by the following colors in our naming system: Red, Yellow, Orange.",
			found: "Yellow Bins",
			link: "https://www.andymark.com/products/6-32-1-25-in-hex-head-machine-screw-bulk-qty",
			vendor: "AndyMark",
			imageCount: 2
		},

		{
			name: "Chain",
			fileName: [
				require("./Assets/Images/Parts/Chain1.jpg"),
				require("./Assets/Images/Parts/Chain2.jpg")
			],
			description: "A chain connects two sprockets to do various jobs, such as spinning shafts, acting as an elevator, etc.  There are two types of chain: #25 and #35.",
			link: "https://www.vexrobotics.com/roller-chain.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Coupler",
			fileName: [
				require("./Assets/Images/Parts/Coupler1.jpg"),
				require("./Assets/Images/Parts/Coupler2.jpg")
			],
			description: "Couplers connect two shafts together.",
			found: "Autoshop - Bearing Bin",
			link: "https://www.vexrobotics.com/217-4008.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Gear",
			fileName: [
				require("./Assets/Images/Parts/Gear1.jpg"),
				require("./Assets/Images/Parts/Gear2.jpg")
			],
			description: "Gears mesh together via teeth and are used to transmit motion from one shaft to another.  Gears come with different amounts of 'teeth.'",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/1-2-hex-bore.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Gearbox",
			fileName: [
				require("./Assets/Images/Parts/Gearbox1.jpg"),
				require("./Assets/Images/Parts/Gearbox2.jpg"),
				require("./Assets/Images/Parts/Gearbox3.jpg")
			],
			description: "Gearboxes allow mechanisms to move at different speeds and torques than with only a motor.  Higher gear ratio = higher torque and less speed.  Lower gear ratio = lower torque and more speed.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/wcp-ds.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Gusset",
			fileName: [
				require("./Assets/Images/Parts/Gusset1.jpg"),
				require("./Assets/Images/Parts/Gusset2.jpg"),
				require("./Assets/Images/Parts/Gusset3.jpg")
			],
			description: "Gussets are plates for connecting aluminum stock together and for attaching other parts to stock.  They come in many different shapes and sizes, such as T-shaped, L-shaped, angle, corner, etc.  Some also hold bearings as well.  See the product page for more details; it’s good to know all of the different gussets available.",
			found: "Autoshop - VEX Bin",
			link: "https://www.vexrobotics.com/versaframegussetsandmounts.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Hub",
			fileName: [
				require("./Assets/Images/Parts/Hub1.jpg"),
				require("./Assets/Images/Parts/Hub2.jpg")
			],
			description: "Hubs are used to spin wheels with shafts if the wheel does not have a hex hole.",
			found: "Autoshop",
			link: "https://www.andymark.com/products/1-2-in-hex-hub",
			vendor: "AndyMark",
			imageCount: 2
		},

		{
			name: "Lock Collar",
			fileName: [
				require("./Assets/Images/Parts/LockCollar1.jpg"),
				require("./Assets/Images/Parts/LockCollar2.jpg"),
				require("./Assets/Images/Parts/LockCollar3.jpg")
			],
			description: "Lock collars are used to hold objects in place on a shaft.  Make sure not to lose the bolt in the lock collar!  The bolt is usually a blue bolt in our naming system.",
			found: "Autoshop - VEX Bin",
			link: "https://www.vexrobotics.com/shaft-collars.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Motor",
			fileName: [
				require("./Assets/Images/Parts/Motor1.jpg"),
				require("./Assets/Images/Parts/Motor2.jpg")
			],
			description: "Motors are used to convert electrical energy into mechanical energy to make shafts spin.  They are usually connected to gearboxes.  Different types of motors include 775 Pro, BAG, CIM, Mini CIM, Neo, Falcon 500, etc.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/775pro.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Nuts",
			fileName: [
				require("./Assets/Images/Parts/Nuts1.jpg"),
				require("./Assets/Images/Parts/Nuts2.jpg")
			],
			description: "A nut is a type of fastener with a threaded hole. Nuts are almost always used with a bolt to fasten parts together.",
			found: "Autoshop - Yellow Bins",
			link: "https://www.andymark.com/products/1-4-20-nut-bulk-qty",
			vendor: "AndyMark",
			imageCount: 2
		},

		{
			name: "Piston",
			fileName: [
				require("./Assets/Images/Parts/Piston1.jpg"),
				require("./Assets/Images/Parts/Piston2.jpg")
			],
			description: "Pneumatic pistons use air to move a shaft in and out.  Pistons can be used for a variety of things, such as lifting something or moving something back and forth.",
			found: "Autoshop",
			link: "http://bimba.com/",
			vendor: "BIMBA",
			imageCount: 2
		},

		{
			name: "Pulley",
			fileName: [
				require("./Assets/Images/Parts/Pulley1.jpg"),
				require("./Assets/Images/Parts/Pulley2.jpg")
			],
			description: "A pulley is a wheel on an axle or shaft that, when used with belts or rope, allows for movement and change of direction.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/htdpulleys.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Rivet",
			fileName: [
				require("./Assets/Images/Parts/Rivet1.jpg"),
				require("./Assets/Images/Parts/Rivet2.jpg")
			],
			description: "Autoshop - Robot cart in fasteners drawer",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/217-0396.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Shaft",
			fileName: [
				require("./Assets/Images/Parts/Shaft1.jpg"),
				require("./Assets/Images/Parts/Shaft2.jpg")
			],
			description: "Shafts are similar to an axle on a car. You can mount objects on the shaft, such as wheels, spacers, and lock collars. The two most common types of shafts are hex and circular.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/thunderhexstock.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Spacer",
			fileName: [
				require("./Assets/Images/Parts/Spacer1.jpg"),
				require("./Assets/Images/Parts/Spacer2.jpg")
			],
			description: "Spacers are useful for spacing out items on a shaft, such as gears and wheels.",
			found: "Autoshop - VEX Bin",
			link: "https://www.vexrobotics.com/acetalspacers-vexpro.html",
			vendor: "VexPro",
			imageCount: 2
		},

		{
			name: "Sprocket",
			fileName: [
				require("./Assets/Images/Parts/Sprocket1.jpg"),
				require("./Assets/Images/Parts/Sprocket2.jpg"),
				require("./Assets/Images/Parts/Sprocket3.jpg")
			],
			description: "A sprocket is a wheel with teeth that meshes with a chain to make it spin.  There are two types of sprockets sizes: #25 and #35.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/25-sprockets.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Stock",
			fileName: [
				require("./Assets/Images/Parts/Stock1.jpg"),
				require("./Assets/Images/Parts/Stock2.jpg"),
				require("./Assets/Images/Parts/Stock3.jpg")
			],
			description: "A piece of aluminum that is used as the frame of the robot and comes in different sizes, which conveniently comes with holes pre-drilled.  Stock comes in 1x1, 2x1, flat, L, etc.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/versaframestock.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "VersaBlock",
			fileName: [
				require("./Assets/Images/Parts/VersaBlock1.jpg"),
				require("./Assets/Images/Parts/VersaBlock2.jpg"),
				require("./Assets/Images/Parts/VersaBlock3.jpg")
			],
			description: "A bearing mount that goes around 2x1 stock to hold bearings.  This is commonly used for the drivetrain.",
			found: "Autoshop",
			link: "https://www.vexrobotics.com/bearingblocks.html",
			vendor: "VexPro",
			imageCount: 3
		},

		{
			name: "Wheel",
			fileName: [
				require("./Assets/Images/Parts/Wheel1.jpg"),
				require("./Assets/Images/Parts/Wheel2.jpg"),
				require("./Assets/Images/Parts/Wheel3.jpg")
			],
			description: "Wheels are used to move the robot and can also be used to intake or outtake an object. Examples of wheels are omni, traction, colson, compliant, and flex.",
			found: "Autoshop",
			link: "https://www.andymark.com/search?utf8=%E2%9C%93&q=wheel",
			vendor: "AndyMark",
			imageCount: 3
		}
	],



	tools: [
		{
			name: "Battery Beak",
			fileName: [
				require("./Assets/Images/Tools/BatteryBeak1.jpg"),
				require("./Assets/Images/Tools/BatteryBeak2.jpg")
			],
			description: "A battery beak determines the overall health and charge of a robot battery.  The optimal charge percentage is around 120-130%.",
			found: "Autoshop",
			imageCount: 2
		},

		{
			name: "Clamp",
			fileName: [
				require("./Assets/Images/Tools/Clamp1.jpg"),
				require("./Assets/Images/Tools/Clamp2.jpg")
			],
			description: "Clamps are used to keep objects from falling and to hold them in place while working on them.",
			found: "Autoshop; Woodshop",
			imageCount: 2
		},

		{
			name: "File",
			fileName: [
				require("./Assets/Images/Tools/File1.jpg"),
				require("./Assets/Images/Tools/File2.jpg")
			],
			description: "Metal files are used to trim/smoothen the rough edges of stock or other metal after the metal is cut.",
			found: "Autoshop - Robot Cart; Woodshop - Back Cabinet",
			imageCount: 2
		},

		{
			name: "Hand Drill",
			fileName: [
				require("./Assets/Images/Tools/HandDrill1.jpg"),
				require("./Assets/Images/Tools/HandDrill2.jpg")
			],
			description: "A drill is a tool primarily used for making round holes or driving fasteners into stock. Drill bits/screw bits are put inside the drill gun, which change the size of the hole drilled.",
			found: "Woodshop - Back Cabinet",
			imageCount: 2
		},

		{
			name: "Pliers",
			fileName: [
				require("./Assets/Images/Tools/Pliers1.jpg"),
				require("./Assets/Images/Tools/Pliers2.jpg")
			],
			description: "Pliers are used to hold objects firmly. They come in many different types of shapes.",
			found: "Autoshop - Robot Cart; Tool Room",
			imageCount: 2
		},

		{
			name: "Ratchet",
			fileName: [
				require("./Assets/Images/Tools/Ratchet1.jpg"),
				require("./Assets/Images/Tools/Ratchet2.jpg")
			],
			description: "A ratchet allows continuous motion in only one direction while preventing movement in the opposite direction.  It is used to fasten nuts to bolts.  The widths are designated by the following colors in our naming system to match the bolts: Red, Yellow, Orange.",
			found: "Autoshop - Robot Cart; Tool Room",
			imageCount: 2
		},

		{
			name: "Rivet Gun",
			fileName: [
				require("./Assets/Images/Tools/RivetGun1.jpg"),
				require("./Assets/Images/Tools/RivetGun2.jpg")
			],
			description: "A rivet gun is used to 'pop' the rivets (a fastener) to the holes in stock.",
			found: "Autoshop - Robot Cart",
			imageCount: 2
		},

		{
			name: "Scratch Awl",
			fileName: [
				require("./Assets/Images/Tools/ScratchAwl1.jpg"),
				require("./Assets/Images/Tools/ScratchAwl2.jpg")
			],
			description: "A Scratch Awl is used to make dents/marks in stock so it’s easier to know where to drill and to help prevent slippage when initially drilling a hole.",
			found: "Woodshop - Back Cabinet",
			imageCount: 2
		},

		{
			name: "Square",
			fileName: [
				require("./Assets/Images/Tools/Square1.jpg"),
				require("./Assets/Images/Tools/Square2.jpg")
			],
			description: "A square is like a ruler, but is shaped as a 90° angle for square measurements.",
			found: "Woodshop - Back Cabinet",
			imageCount: 2
		},

		{
			name: "T-Handle",
			fileName: [
				require("./Assets/Images/Tools/THandle1.jpg"),
				require("./Assets/Images/Tools/THandle2.jpg")
			],
			description: "Holds a bolt in place while another person fastens the nut with a wrench or ratchet (or vice versa). The widths are designated by the following colors in our naming system to match the bolts: Red, Yellow, Orange.",
			found: "Autoshop - Robot Cart; Tool Room",
			imageCount: 3
		},

		{
			name: "Wire Cutter",
			fileName: [
				require("./Assets/Images/Tools/WireCutter1.jpg"),
				require("./Assets/Images/Tools/WireCutter2.jpg")
			],
			description: "A wire cutter cuts wires.",
			found: "Autoshop - Robot Cart",
			imageCount: 2
		},

		{
			name: "Wire Stripper",
			fileName: [
				require("./Assets/Images/Tools/WireStripper1.jpg"),
				require("./Assets/Images/Tools/WireStripper2.jpg")
			],
			description: "Wire strippers remove the wire’s insulation to expose the metal wire itself.",
			found: "Autoshop - Robot Cart",
			imageCount: 2
		},

		{
			name: "Wrench",
			fileName: [
				require("./Assets/Images/Tools/Wrench1.jpg"),
				require("./Assets/Images/Tools/Wrench2.jpg")
			],
			description: "A wrench is a tool used to provide grip to fasten nuts to bolts. The widths are designated by the following colors in our naming system to match the bolts: Red, Yellow, Orange.",
			found: "Autoshop - Robot Cart; Tool Room",
			imageCount: 2
		}
	]
};

export default data;