function vm() {
	

	this.events = ko.observableArray([
		{
			date: "July 2013",
			type: "work",
			title: "Foundation Manager at Informaat CXP",
			body: "<p>Joined the spin-off from Informaat. Informaat CXP is developing a Customer Experience Platform in partnership with SAP and MSG. I am product owner for our Foundations and also part of the operational management team.</p>"
		},
		{
			date: "May 23/24 2012",
			type: "education",
			title: "Two day Scrum master course",
			body: "<p>A two day scrum course the learn the basic skill set as a Scrum Master.</p>"
		},
		{
			date: "May 2012",
			type: "project",
			title: "Presentation app for Centraal Beheer Achmea",
			body: "<p>We developed an online presentation app for accountmanager that runs in the browser but also works offline on mobile devices. With the app called 'Presenter' the accountmanger can create there personal presentations based on a library of pre-designed slides.</p>"
		},
		{
			date: "February 2012",
			type: "project",
			title: "Service Design project for Achmea",
			body: "<p>In this project we examined solutions to improve current insurance processes in the context of transparency and customer expectation.</p>"
		},
		{
			date: "December 2011",
			type: "inspiration",
			title: "Presentation: The mobile web",
			body: "<p>After long hours of research I put together a slideshare about the 'so called' mobile web and solutions to deal with this for designers. I have given this presentation on several occasions.</p>"
		},
		{
			date: "November 2011",
			type: "inspiration",
			title: "Talk: When we build by Wilson Miner",
			body: "<p>Great talk by <a href=\"http://vimeo.com/34017777\">Wilson Miner</a>, why our profession matter</p>"
		},
		{
			date: "May 2011",
			type: "inspiration",
			title: "Visted the conference Mobilism, Amsterdam",
			body: "<p><a href=\"http://mobilism.nl/2011\">Mobilism</a> was the first conference that focused exclusively on web design and development for mobile devices.</p>"
		},
		{
			date: "May 2011",
			type: "education",
			title: "Workshop: Designing Mobile Web Experiences",
			body: "<p>Great workshop by <a hef=\"http://www.lukew.com/\">Luke Wroblewski</a> about mobile webdevelopemnt and his credo - Mobile First</p>"
		},
		{
			date: "December 2010",
			type: "project",
			title: "Design Factory for Achmea",
			body: "<p>Design Factory is a Enterprise grade design solution that delivers re-usable building blocks that are pre-integrated to the SAP backend systems. I was UX teamlead and, together with the business analists, responsible for all UX-design, specification, requirement and alignment with stakeholders.</p>"
		},
		{
			date: "July 2010",
			type: "education",
			title: "Workshop: Good Design Faster",
			body: "<p>Adaptive Path's <a href=\"http://www.slideshare.net/pboersma/good-design-faster-at-design-by-fire-2010?codekitCB=414542404.158808\">Good Design Faster workshop</a>, as given by Peter Boersma at Design by Fire 2010.</p>"
		},
		{
			date: "July 2010",
			type: "work",
			title: "Started a steady job at i! Informaat",
			body: "<p>Started at <a href=\"http://www.informaat.com\">Informaat</a> as a UX Designer/Consultant. Involved in various UX Design projects for complex and challenging websites and web applications. </p>"
		},
		{
			date: "January 2010",
			type: "project",
			title: "Employee portal for Achmea Customer Service",
			body: "<p>I was hired as freelance UX consultant by i! Informaat to join the team at Achmea as lead UX-designer to design the new Employee Portal for Achmea Customer Service.</p>"
		},
		{
			date: "September 2009",
			type: "work",
			title: "Part-time teacher Interaction Design at HAN",
			body: "<p>Teacher at the 'Hogeschool Arnhem Nijmegen'.</p>"
		},
		{
			date: "January 2009",
			type: "work",
			title: "Started a new company called Goede Gasten",
			body: "<p>Togehter with Patrick Hofstede from One PM we started Goede Gasten. With a 250m2 office space and a local business network we facilitate freelancers with working spaces, network events and projects. </p>"
		},
		{
			date: "July 2008",
			type: "project",
			title: "Redesign Connexys application",
			body: "<p>Connexys is a web application for the administration and management of the entire recruitment process. This web application is used by, among others. Stork, Atos Origin, TNT ea. Through AMIS I was hired as Interaction and Visual Designer for there new release.</p>"
		},
		{
			date: "January 2008",
			type: "project",
			title: "New website Centraal Beheer Achmea",
			body: "<p>I was hired as contracter by i! Informaat for the new website of the Centraal Beheer Achmea. I was involved in the design team as the lead UX Designer. Together with the team, we have further developed the basic concept of Centraal Beheer Achmea.</p>"
		},
		{
			date: "October 2007",
			type: "project",
			title: "Freelance UX consultant at DeltaPi Systems",
			body: "<p>Delta Pi for AutoCAD is architectural drawing software. Drawing software which integrates into the practice of architects. As freelance ux designer I developed a new website, product demo's and performed expert reviews on the Delta Pi software.</p>"
		},
		{
			date: "July 2007",
			type: "work",
			title: "Started my own UX studio",
			body: "<p>After 1,5 year I decided to start my own UX design studio. Beasty Bytes, is specialized in Interaction Design and Concept Development for Web, Mobile and Desktop applications. Worked for: Informaat, Centraal Beheer, FBTO, Inholland, Connexys BV, and others.</p>"
		},
		{
			date: "November 2005",
			type: "work",
			title: "My first job: Interaction Designer at Noterik",
			body: "<p>Interaction Designer and teamlead for R&D projects</p>"
		},
		{
			date: "September 2005",
			type: "education",
			title: "Master Interactive Multi Media",
			body: "<p>My graduation project - ButterFly - was awarded the <a href=\"http://www.hku.nl/web/DitIsHKU/HKUAward.htm\">HKU Award 2005</a> (&euro; 5.000,-) for most innovative graduation project.</p>"
		},
		{
			date: "July 2005",
			type: "education",
			title: "Bachelor Interaction Design",
			body: "<p>Graduated with honours from the <a href=\"http://www.hku.nl/web/Opleidingen/GamesEnInteractie/InteractionDesign.htm\">Utrecht School of Arts</a></p>"
		},
		{
			date: "September 2001",
			type: "education",
			title: "Started study Interaction Design",
			body: "<p>My first year at the  <a href=\"http://www.hku.nl/web/Opleidingen/GamesEnInteractie/InteractionDesign.htm\">Utrecht School of Arts Utrecht</a>, Faculty Art, Media &amp; Technology.</p>"
		},
		{
			date: "May 4th 1980",
			type: "tweet",
			title: "Birthday",
			body: "<p>The only intuitive interface is the nipple; everything else is learned.</p>"
		}
	]);
}

// Activates knockout.js
ko.applyBindings(new vm());