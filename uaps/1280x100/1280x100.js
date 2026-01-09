(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"1280x100_atlas_1", frames: [[0,337,845,276],[1259,288,99,792],[0,711,663,43],[0,0,1223,335],[0,615,429,94],[847,337,410,274],[1225,0,332,286]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1280x418DD = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2994,83);


(lib.Bitmap2 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.box = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lid = function() {
	this.initialize(ss["1280x100_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.lid();
	this.instance.setTransform(-552.6,309.3,0.3232,0.3232,-15.1614);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552.6,281.3,127.80000000000001,117.19999999999999);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_9
	this.instance = new lib.box();
	this.instance.setTransform(-366,-186,0.3415,0.3414);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-366,-186,140,93.6);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(629,-335,0.6081,0.6085);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(629,-335,260.9,57.19999999999999);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-302,-116,0.2023,0.2023);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-401,-127,0.5887,0.1126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401,-127,720,37.7);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-462,-114,0.4698,0.4701);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-680,-212,1,0.2049);

	this.instance_2 = new lib._1280x418DD();
	this.instance_2.setTransform(-590,-185,1.5148,1.5149);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-680,-212,1370,445.1);


// stage content:
(lib._1280x100 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_6
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(1403.15,47.85,1,1,14.9979,0,0,-428.9,321.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({regX:-488.7,regY:339.9,scaleX:1.0247,scaleY:1.0247,x:1150.65,y:50.05},0).wait(1).to({scaleX:1.0389,scaleY:1.0389,x:1041.5,y:50.1},0).wait(1).to({scaleX:1.0481,scaleY:1.0481,x:970.5},0).wait(1).to({scaleX:1.0546,scaleY:1.0546,x:920.65,y:50.15},0).wait(1).to({scaleX:1.0594,scaleY:1.0594,x:883.95},0).wait(1).to({scaleX:1.063,scaleY:1.063,x:856.15},0).wait(1).to({scaleX:1.0658,scaleY:1.0658,x:834.55},0).wait(1).to({scaleX:1.068,scaleY:1.068,x:817.55},0).wait(1).to({scaleX:1.0698,scaleY:1.0698,x:804.05},0).wait(1).to({scaleX:1.0712,scaleY:1.0712,x:793.3,y:50.2},0).wait(1).to({scaleX:1.0723,scaleY:1.0723,x:784.7,y:50.15},0).wait(1).to({scaleX:1.0732,scaleY:1.0732,x:777.85,y:50.2},0).wait(1).to({scaleX:1.0739,scaleY:1.0739,x:772.4},0).wait(1).to({scaleX:1.0744,scaleY:1.0744,x:768.2,y:50.15},0).wait(1).to({scaleX:1.0749,scaleY:1.0749,x:764.9},0).wait(1).to({scaleX:1.0752,scaleY:1.0752,x:762.5,y:50.2},0).wait(1).to({scaleX:1.0754,scaleY:1.0754,x:760.75},0).wait(1).to({scaleX:1.0756,scaleY:1.0756,x:759.65},0).wait(1).to({x:759,y:50.15},0).wait(1).to({regX:-428.9,regY:321.6,scaleX:1.0757,scaleY:1.0757,x:826,y:47.75},0).wait(10).to({startPosition:0},0).to({x:901},10,cjs.Ease.backIn).wait(170));

	// Symbol_5
	this.instance_1 = new lib.Symbol5("synched",0);
	this.instance_1.setTransform(733.8,52.4,1,1,0,0,0,-318.2,-138.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({regY:-138,scaleX:1.033,scaleY:1.033,x:686.8,y:50.85},10,cjs.Ease.backIn).wait(170));

	// Symbol_4
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(1106.75,54.8,0.748,0.748,0,0,0,759.4,-306.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({_off:false},0).to({regX:759.5,scaleX:1,scaleY:1,x:1106.5,y:51.15,alpha:1},18,cjs.Ease.get(1)).wait(132));

	// Symbol_2
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(-355,141.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:320},25,cjs.Ease.circOut).wait(215));

	// Symbol_1
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.setTransform(600,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(240));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-116,18,1510.4,395.1);
// library properties:
lib.properties = {
	id: '12F0CBE7016F4FBAA1D11564ED923E04',
	width: 1280,
	height: 100,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap17.png", id:"Bitmap17"},
		{src:"images/1280x100_atlas_1.png", id:"1280x100_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['12F0CBE7016F4FBAA1D11564ED923E04'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;