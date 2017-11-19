(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_P_", frames: [[0,0,186,129],[188,0,32,92]]},
		{name:"index_atlas_NP_", frames: [[0,0,300,600],[171,602,111,226],[171,830,85,151],[0,602,169,236]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.fourteentable = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nineteenchease = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nineteencocktail = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nineteencrackers = function() {
	this.spriteSheet = ss["index_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nineteengrapes = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.nineteentomatoes = function() {
	this.spriteSheet = ss["index_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.readyshrimp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AhZB9QgIgDgBgIQABgGAHgDIAJgFQAFgDABgPQABgOAAguIAAgdQAAgygBgOQgCgPgFgCIgIgDQgLgDAAgHQAAgEADgEQAEgDAHgCIAagIQAMgDAHgBQAFAAACADQACADAAAGIAAAJIABADIAAACIAIgFIAGgGQAMgHAKgFQAKgEAKAAQAjAAAVAZQAWAZAAAoQAAArgYAcQgZAcglAAQgQABgFgFQgGgEgBgIQAAgEADgDQAEgDAFAAIAEABIAHABQAUAAAMgRQAMgRAAgcQAAgfgNgTQgOgTgUAAQgTAAgKAKQgLALAAAbIAAB0IABASQAAAIADADQACACAIACIAHACIAFAEIABAFQAAAHgLADQgLADgaAAQgaAAgKgDg");
	this.shape.setTransform(50.8,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AiUBbQgJgDAAgIQAAgHAJgDIAFgCQAFgCABgHQADgFAAgPIAAgMIgBgPIAAgKQAAgigCgKQgBgKgEgCIgIgDQgLgDAAgHQAAgEADgDIALgGIAbgJIASgEQAFAAADAEQACADAAAGIAAAKIAAABIABACIABABIABgBIABAAIAEgDIACgCQAWgVAWAAQAJAAAIADQAIACAHAFQAHAFAGAIQAHAJABAAQADgBAFgFIAIgJQAMgKAJgDQAJgEAKAAQAWAAAQAJQAPAIAHAQQAJAQgBA2IABASIgBAKIAAAIQAAALACAEQACAEAFADIAFACQAJADAAAHQAAAIgJADQgIACgdAAQgaABgJgDQgJgDAAgHQAAgHAKgEIAHgDQAEgCACgJQABgJAAgWQAAg2gGgOQgIgPgTAAQgWAAgJATQgJASAAAsIAAAKQAAAUACAGQACAHAEACIAFACQAJADAAAHQAAAIgIADQgJACgcAAQgYABgJgDQgJgDAAgHQAAgHAJgDIAHgEQAEgCACgHQACgHAAgWQAAg5gIgOQgHgPgUgBQgJAAgJAHQgJAFgFAKQgEAJgBAOQgDAPAAAiQAAARACAGQACAGAEACIAHAEQAJADAAAHQAAAHgJADQgJADgYAAQgcAAgJgDg");
	this.shape_1.setTransform(23.2,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AgfCDQgKgDABgJQgBgGAKgDIAEgCQAFgDABgGQACgGAAgOIAAgMIAAgPIAAgTQABgdgCgHQgCgJgDgCIgJgDQgLgEAAgGQAAgEAEgDQADgEAIgDIAbgJIATgDQAFAAACADQADAEgBAIIAAALIAAAJIgCAtIAAABIAAAtQAAASABAHQACAHAEACIAHADQAJAEAAAHQAAAHgJADQgJADgXAAQgcAAgIgDgAgVhcQgJgGAAgKQABgKAIgHQAJgIAMAAQALAAAIAHQAIAHgBAKQAAAKgIAHQgJAHgLAAQgMAAgHgHg");
	this.shape_2.setTransform(0.8,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgIQAAgHAJgCIAFgDQAEgCADgHQACgFAAgPIAAgMIgBgPIAAgKQAAgigBgKQgCgKgEgCIgIgDQgLgDAAgHQAAgEADgDQADgDAIgDIAZgIIAQgEQAKAAACAZIABAEIABABQAJgQALgHQAKgIAKAAQAMAAAIAIQAIAHAAANQAAANgGAIQgGAGgKAAIgJgBIgIgFIgFgHQgBgFgCgBQgNAAgFASQgEARAAA3QAAARACAHQACAJAEABIAHADQALAEAAAHQAAAHgKADQgKADgYAAQgcAAgJgDg");
	this.shape_3.setTransform(-11.2,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AAaCDQgJgCAAgIQAAgGAJgEIAGgDQAFgCABgIQACgIAAgTQAAg8gIgNQgHgPgTAAQgJAAgJAGQgIAGgFAIQgEAJgCAOQgBANgBAkQABATABAGQACAGAEACIAGADQAKAEAAAGQgBAIgIACQgKAEgXAAQgdAAgIgEQgKgDABgIQgBgGAKgDIAEgCQAFgDACgHQACgJAAgTIAAgfIAAgbIgBhSQgBgUgDgFQgCgCgLgDQgKgDgBgGQABgGAEgDQAFgDAPgGIATgGIARgBQAGgBADAEQACADAAAJIAAAHIgCBJIAAAJIABAFIADABIAEgEIAHgHQAIgJALgFQAJgEALAAQAggBAPAVQAQAUAAApIAAARIAAAgIAAALQABAJABAEQACAEAEADIAEABQAJAEAAAGQABAIgJADQgJAEgdAAQgYAAgIgEg");
	this.shape_4.setTransform(-30.3,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AgtCFQgUgGgNgHQgHgEgFgQQgFgQAAgUQAAgJADgEQAEgEAGgBQAIAAAJARIAFAIQALAUAOAJQAOAKATgBQATAAAOgLQAOgMAAgRQAAgag2gYIgGgCQgsgSgPgRQgOgQAAgaQAAghAYgVQAYgWAnABIAVABIAZAGIAIgFIAGgBQAEAAAEACQADADAEAHQAGALAEANQAEAMAAAIQAAAHgDADQgDAEgFAAQgKAAgJgOIgDgDQgKgNgMgHQgNgGgPAAQgUAAgLAJQgMAJAAARQAAAPAKAKQAJAKAnARIAIADQAgANAPANQAKAJAFAMQAGANAAAOQAAAmgaAVQgbAUgtAAQgXAAgUgDg");
	this.shape_5.setTransform(-51.9,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_6.setTransform(120.8,-21.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgTBNQgLgSgZg8IgLgcQgNgigIgEIgFgCQgLgFAAgHQAAgHAJgDQAJgCAeAAQAZAAAJACQAJADAAAHIgBAGIgEADIgGAEQgHACAAAEIAEAPIAOAjIAPAjQAEAJACAAQACAAAEgGIAIgPIAUguQAGgRAAgHIgBgHIgEgDIgFgDQgJgDAAgGQAAgHAJgDQAIgCAWAAQAUAAAHACQAIADAAAHQAAAHgJADIgHADQgIAEgQAkIgFALIgHARQgqBegLABQgIgBgKgRg");
	this.shape_7.setTransform(101.3,-21.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgGAJgDIAFgCQAFgDACgGQABgFAAgOIAAgNIAAgOIAAgLQAAgigBgJQgCgLgEgCIgIgDQgLgDAAgHQAAgEADgDQAEgDAIgEIAYgIIAQgDQAJABAEAYIAAADIABABQAJgOAKgIQALgIAKAAQAMAAAIAIQAIAIAAAMQAAANgGAHQgGAIgKgBIgJgBIgIgGIgEgGQgCgGgDAAQgMAAgFASQgEASAAA2QAAAQACAJQABAHAGADIAGACQAMADAAAIQgBAHgJADQgLADgYAAQgcAAgJgDg");
	this.shape_8.setTransform(84.8,-21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_9.setTransform(67.3,-21.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AgtCEQgUgEgNgIQgHgEgFgPQgFgQAAgVQAAgIADgFQAEgFAGABQAIAAAJAQIAFAHQALAVAOAKQAOAIATABQATAAAOgMQAOgMAAgSQAAgZg2gYIgGgCQgsgSgPgRQgOgQAAgaQAAghAYgVQAYgVAngBIAVADIAZAFIAIgEIAGgCQAEAAAEADQADACAEAHQAGAMAEAMQAEALAAAKQAAAGgDADQgDADgFAAQgKAAgJgMIgDgEQgKgOgMgGQgNgHgPABQgUgBgLAKQgMAKAAAQQAAAPAKAKQAJAKAnAQIAIAEQAgANAPANQAKAJAFAMQAGANAAAOQAAAmgaAUQgbAWgtAAQgXAAgUgFg");
	this.shape_10.setTransform(46.6,-25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgjATQgGAAgCgCQgDgCAAgFIACgJIAEgJQACgGADgCQADgBAHAAIAJAAIAQABIAfgCIAFAAQAGAAACACQADACAAAFQAAAJgGAKQgGAIgIAAIgJAAIgKAAIgoABIgDAAg");
	this.shape_11.setTransform(29.5,-21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AhCBFQgagbAAgpQAAgoAcgcQAbgcAoAAQAoAAAYAaQAaAaAAAoQAAApgbAdQgbAdgnAAQgoAAgagbgAgjg2QgLAPABAYQAAAkAPAYQAPAZAWAAQARAAAMgPQALgPAAgZQAAgjgQgYQgQgZgUAAQgSAAgMAPg");
	this.shape_12.setTransform(12.6,-21.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhiIgRAAIgFgBIgCgFIAAgEQAAgGATgRIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAAAjIApAAQAEAAACABQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAYAEAFQAEAGALABQAFAAAKgEIAMgDQAEABADACQACADAAADQAAALgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_13.setTransform(-4.5,-23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgjATQgGAAgCgCQgDgCAAgFIACgJIAEgJQACgGADgCQADgBAHAAIAJAAIAQABIAfgCIAFAAQAGAAACACQADACAAAFQAAAJgGAKQgGAIgIAAIgJAAIgKAAIgoABIgDAAg");
	this.shape_14.setTransform(-17.7,-21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AhUB5QgJgHABgNQgBgIAHgHQAGgGAJgBIAJABIAFAFIAFAGQAEAIAEAAQAJAAAKgNQAJgOAAgOQAAgQgMgdIgCgFIgeg/IgQgkQgDgGgLgEIAAgBQgGgCgCgDQgDgDAAgDQAAgJAKgDQAJgCAbAAQAbAAAJACQAJADAAAHIgBAGIgEADIgHAEQgGACAAADIADAPIAPAkIAOAjQAFAIADAAQACAAAEgIIALgdIAOgkQAFgOgBgEQABgFgLgHQgKgFAAgFQAAgGAJgDQAHgDAVABQAWAAAIACQAIADAAAHQAAAIgLACIgHADQgKAFgMAgIgGANIgXA7QgeBMgTAXQgTAXgbgBQgNABgJgIg");
	this.shape_15.setTransform(-33.3,-17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AhPBvQgWgZAAgnQAAgtAZgbQAYgdAnAAIAOADQAFABADAEQADAEAAAEQAAAKgMAAIgFAAIgEgBQgVABgMAQQgMAQAAAdQAAAfANATQAOAUAUAAQATAAAKgLQALgLgBgVIAAgxIAAhUQAAgNgCgFQgDgFgGgDIgFgBQgMgDAAgHQAAgEAFgEQAFgDAOgGIAUgFIARgDQAGAAADAEQACAEAAAIIAAAJIgCBxIABBMQACASADACIAMAEQAKACAAAHQAAAIgbAJIgSAEIgNACQgFAAgDgDQgCgDAAgGIAAgJIAAgDIgCgBIgFADIgIAHQgLAIgKADQgLAEgLABQgiAAgVgZg");
	this.shape_16.setTransform(-53.2,-25.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AAgBWIgJgJIgIAEQgWAPgXAAQgbAAgQgQQgQgPgBgaQABgdAVgPQAVgRAmAAQAJAAAFADQAFADAAAHQAAAKgNAAQgSAAgLAIQgLAJAAAQQAAAOAKAJQAJAJARAAQAQAAAIgIQAHgIAAgTIAAhFQABgQgIgJQgGgJgNAAQgIAAgIAFQgIADgHAJIgEAEQgLAOgMAAQgIAAgEgEQgEgFAAgIQgBgRAWgMQAVgMAhAAQAUAAAOAGQAPAFAJAKQAEAHADAMQACALABAaIAAA6QgBALACAFQACAFAEABIAFABQAMAEAAAGQAAAIgNAIQgMAHgQAAQgIAAgKgKg");
	this.shape_17.setTransform(-74.7,-21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_18.setTransform(-94.7,-21.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AAoBbQgSg6gNgMQgMgMgTAAQgOAAAAgLQAAgMAMABQAeAAAPgMQAOgMAAgZQAAgYgPgMQgPgMgbAAQgPAAgFABQgFACgCAGIgCAQIgBAlIAABQIABA3QABANADACIAJAEQALAEAAAHQAAAJgKACQgKAEgdAAQgdAAgKgEQgKgCAAgJQAAgHALgEIAJgFQADgDACgVQABgWAAg5IgBhFQgBgagDgEQgCgDgJgEQgKgEAAgGQAAgHAFgDQAGgDALgBIAoAAIAmgBIAcAAQAoAAAVARQAVARAAAhQAAAXgOASQgOARgZAIIAAACQATADAMAMQALANAJAdIAEATQAHAcALAAIAGAAIAHgBQADAAACADQADADAAAEQAAAIgKAFQgLAGgRAAQgkAAgMgrg");
	this.shape_19.setTransform(-117.4,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.readyshrimp, new cjs.Rectangle(-133,-49.5,266.1,91), null);


(lib.partyperfect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgNBfIgUgEIgFAEIgGABIgEgBIgDgCQgGgFgGgPQgFgPAAgNQAAgGADgEQADgEAFAAQAIAAAJAPIAHAKQAFAIAKAEQAJAEAKABQANAAAHgHQAHgGAAgKQAAgPgegPIgLgGQgcgOgKgKQgKgMAAgSQAAgYAQgPQARgPAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAOAAAQQAAAHgDADQgDAEgFAAQgFAAgEgDQgEgDgFgJQgHgMgHgFQgIgEgKAAQgKAAgGAGQgHAGAAAJQAAAJAHAHQAHAGAWAMIACABQAzAYAAAeQAAAZgUARQgTARgeAAg");
	this.shape.setTransform(112.8,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgeCDQgJgDAAgIQAAgGAIgDIAJgFQADgDABgLIACgkIAAgcIgBgiIAAgPQAAgtgBgOQgCgOgEgCIgLgDQgMgEAAgGQAAgEAEgDQAEgEANgEIAYgHIASgCQAGgBACAEQACADAAAJIAAAOQgCBBAABCIABA+QABAOADADIAKAFQAJAEAAAGQAAAIgJACQgJAEgYAAQgbAAgJgEg");
	this.shape_1.setTransform(99.1,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AAKAUIgVg5QgKgagJgEIgFgCQgLgEAAgHQAAgIAKgCQAIgEAdAAQAZAAAJAEQAJACAAAIIgBAFIgEAEIgGADQgHACAAAFIADALIAPAmIAQAjQAEAJACgBQACAAAEgEIAJgQIATguQAGgSABgGIgCgHIgEgDIgFgCQgIgEAAgGQAAgHAIgCQAIgEAWAAQATAAAIAEQAJACAAAHQAAAIgKADIgHACQgIAEgRAmIgDAKIgIAQQgqBfgMgBQgMAAghhKgAhrAKIgFgLIgMgfQgMgfgIgEIgGgCQgLgEAAgHQAAgIAKgCQAJgEAeAAQAZAAAIAEQAKACgBAIIgBAFIgDAEIgGADQgHACgBAFIAFAOIANAjIAQAiQAEAKADgBQAGABAFgMIAFgMIAFgGQACgCAEAAQAEAAADADQADACAAAFQgBAFgFAJQgTArgIAOQgJAOgGgBQgNABgkhVg");
	this.shape_2.setTransform(79.2,22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AhCBEQgagaAAgpQAAgpAbgbQAbgcApABQAnAAAZAaQAaAZAAAoQAAAqgbAcQgcAcgnABQgnAAgagcgAgig2QgMAPAAAZQABAjAPAYQAQAZAUAAQATAAALgPQALgQAAgYQAAgjgQgYQgPgYgVAAQgSAAgLAOg");
	this.shape_3.setTransform(53.2,22);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AgNCEIgkgBIgSAAIgUAAQgNAAgGgCQgHgEAAgHQAAgHAKgEQAJgEACgCQADgEABgbIAChHIgChFQgBgbgDgDQgCgDgJgEQgKgDAAgIQAAgGAGgEQAFgDALAAIAUABIAVAAIAlgBIAcgBQAoAAAVAQQAVARAAAfQAAAYgPAQQgPAQgdAEQAlAEATARQAUARAAAfQAAAigZATQgYATgsAAgAgchpQgGABgBADQgDAFgBARIgBA0IAABNIABAjQABAKADAFQACAEAJACQAJACAPAAQAeAAAQgMQAPgNAAgXQAAgbgSgMQgRgNghAAQgQAAAAgKQAAgMAPAAQAYAAAQgMQAPgKAAgYQAAgYgOgLQgPgMgdAAg");
	this.shape_4.setTransform(29.8,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("Ag7BuQgagbAAgoQAAgqAbgbQAbgcAoAAQAkAAAUAVQAVATAAAiQAAALgDADQgEAEgNAAIhGAAQgGAAgDgDQgDgDAAgFQAAgFADgCQADgDAGAAIAmAAIAJgBQACgBAAgEQAAgSgMgMQgMgMgQABQgWAAgKASQgLASAAAbQAAAeAPAUQAOAVAXAAQANAAAKgDQAJgDAJgGIAGgGQAKgHAFAAQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAHQgQAMgPAHQgOAFgSAAQgmAAgagagAgVhNQgEgHAAgEIABgDIAEgCIA9gmIAGgEIAEAAQAFAAAFAHQAGAIAAAHQAAAFgLAFIgBAAIhAAdIgDABIgCABQgDAAgEgFg");
	this.shape_5.setTransform(-3.1,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgcIAAhhIgRAAIgFgBIgCgFIAAgFQAAgFATgQIAIgHIAHgHQATgQAHAAIAFACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABIAAAjIApAAQAEgBACACQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAXAEAGQAEAHALAAQAFgBAKgCIAMgEQAEAAADADQACACAAAEQAAAKgPAKQgQAJgTAAQgLAAgJgDg");
	this.shape_6.setTransform(-19.6,20.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AggCDQgJgDAAgJQAAgGAJgDIAFgCQAFgDABgGQACgGAAgOIAAgMIAAgPIAAgTQAAgdgBgHQgCgJgDgCIgJgDQgLgEAAgGQAAgEAEgDQADgEAIgDIAbgJIATgDQAFAAACADQACAEAAAIIAAALIAAAJIgCAtIAAABIAAAtQAAASABAHQACAHAEACIAHADQAJAEAAAHQAAAHgJADQgIADgZAAQgaAAgKgDgAgWhcQgHgGgBgKQAAgKAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQgBAKgHAHQgJAHgMAAQgMAAgIgHg");
	this.shape_7.setTransform(-31.8,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AhQBvQgVgZAAgnQAAgtAZgbQAZgdAnABIAMABQAGACADAEQADAEAAAFQAAAJgMABIgFgBIgFAAQgUAAgMAQQgMAQAAAdQAAAeANAUQANATAVAAQASAAALgKQALgLAAgUIAAgzIAAhTQgBgNgCgEQgDgGgGgCIgFgBQgLgEAAgGQgBgGAFgDQAEgDAOgFIAVgGIARgCQAGgBADAEQADADAAAJIAAAJIgDBwIACBNQABARADADIAMAEQAKACAAAGQAAAJgaAIIgSAGIgPABQgEAAgDgDQgDgDABgGIAAgIIAAgEIgBgCIgHAEIgIAGQgLAJgJADQgKAFgMAAQgigBgWgYg");
	this.shape_8.setTransform(-47.5,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AAoBdQgDgDAAgGIAAgNIAAgBIgBAAQgCAAgFAFIgCACQgIAJgMAFQgKAEgNAAQgOAAgMgFQgMgFgIgKQgJgKgDgPQgEgPAAgmIAAgMIAAgOIAAgEQAAgPgCgEQgCgEgHgDIgHgCQgKgDAAgGQAAgFAEgDQADgDANgEIAZgHIATgDQAGAAABAEQACAEAAAIIAAAHIgCBFQABAkAHAOQAIAOASAAQAVAAAJgSQAJgSAAgsIAAgOQAAgPgCgEQgCgEgHgDIgHgCQgKgDAAgGQAAgFAEgCQADgEANgEIAYgHIATgDQAGAAACAEQACADAAAJIAAAKIgCBLIAAAfIABAMQACAHAJAEIABAAIADABQAKAEAAAGQAAAEgDADQgDADgJADIgZAJQgNADgHAAQgFAAgCgDg");
	this.shape_9.setTransform(-70.5,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgIQAAgHAJgCIAFgDQAEgCADgHQACgFAAgPIAAgMIgBgPIAAgKQAAgigBgKQgCgKgEgCIgIgDQgLgDAAgHQAAgEADgDQADgDAIgDIAZgIIAQgEQAKAAACAZIABAEIABABQAJgQALgHQAKgIAKAAQAMAAAIAIQAIAHAAANQAAANgGAIQgGAGgKAAIgJgBIgIgFIgFgHQgBgFgCgBQgNAAgFASQgEARAAA3QAAARACAHQACAJAEABIAHADQALAEAAAHQAAAHgKADQgKADgYAAQgcAAgJgDg");
	this.shape_10.setTransform(-88.2,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgcCAQgYgJgTgRQgVgTgLgbQgLgcAAgfQAAgaAHgWQAHgVAPgSQASgWAagMQAZgMAeAAIAWACIAkAIIAEgBIAOgDIAGABIAFAGQAGAKADAOQAEAOAAAKQAAAIgDAEQgCAEgGAAQgIAAgOgQIgMgOQgKgKgOgFQgPgGgRAAQgjAAgVAZQgUAYAAArQAAA2AaAiQAaAjAnAAQAQAAAPgFQAOgFAJgKIAJgKQAIgLAFAAQAFAAADAFQADAFAAAJQAAARgFAKQgEAKgJAAIgBgBIgDAAQgRAJgRAEQgRAFgTAAQgaAAgZgJg");
	this.shape_11.setTransform(-108.4,18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhiIgRAAIgFgBIgCgFIAAgEQAAgGATgRIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAjIApAAQAEAAACABQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAYAEAFQAEAGALABQAFAAAKgEIAMgDQAEABADACQACADAAADQAAALgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_12.setTransform(103.8,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("Ag6BFQgagbAAgnQAAgpAcgcQAbgdApAAQAeAAAVAQQAWAQgBAVQABAJgHAFQgGAGgIgBQgKABgGgFQgFgEgGgPQgHgOgHgEQgGgGgMAAQgUAAgLAQQgNAQAAAcQAAAgARAUQARAVAZgBQAKAAAIgBQAIgDAHgFIAHgFQAKgIAFAAQAEAAADADQACABgBAEQAAAFgDAHQgEAGgGAFQgOANgQAFQgPAGgTABQgmAAgagbg");
	this.shape_13.setTransform(87.5,-21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_14.setTransform(68,-21.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AgzCDQgJgCAAgIQAAgGAJgDIAEgCQAFgCACgGQABgGAAgQIAAgRIAAhYIgUAAQgEAAgCgCQgCgCAAgFIAAgEQAAgFACgCQACgCAEAAIATAAIgBgOIgBgNQAAgcARgQQARgPAdAAQAVAAANAJQANAKAAAOQAAAJgFAEQgFAFgJAAQgFAAgFgDQgFgDgDgEIgDgHQgHgNgLAAQgHAAgDAEQgEAFAAAHIAEAUQADAQABANIAaAAQAFAAABACQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgaAAIAABdQAAAYABAHQACAHADACIAIADQAKADAAAIQAAAHgJADQgJACgZAAQgbAAgJgDg");
	this.shape_15.setTransform(54.3,-25.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgGAJgDIAFgCQAEgDACgGQACgFAAgOIAAgNIAAgOIAAgLQAAgigCgJQgBgLgDgCIgJgDQgLgDAAgHQAAgEAEgDQACgDAIgEIAagIIAQgDQAIABAEAYIAAADIAAABQAKgOAKgIQAKgIALAAQANAAAHAIQAIAIAAAMQAAANgGAHQgGAIgKgBIgKgBIgHgGIgEgGQgCgGgDAAQgMAAgFASQgEASAAA2QAAAQABAJQADAHAEADIAIACQALADAAAIQAAAHgKADQgLADgYAAQgcAAgJgDg");
	this.shape_16.setTransform(40.6,-21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_17.setTransform(23.1,-21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AhfCBQgKgCAAgJQABgHAKgEIAJgFQAEgDACgVQABgWAAg5IgBhFQgCgagDgEQgCgDgJgEQgKgEAAgGQABgHAFgDQAGgEALAAIATAAIAVAAIAlgBIAcAAQApAAAVARQAUASABAiQAAAngZAVQgaASgwABQgTAAAAgNQABgMAPAAQAXAAAOgMQAOgMAAgcQAAgZgOgMQgOgMgeABQgNAAgGABQgFADgBAFIgDARIgBAmIAABQIABA0QACANADADIAJAEQALAEgBAHQABAJgKACQgLAEgcAAQgdAAgLgEg");
	this.shape_18.setTransform(2.6,-25.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AgjATQgGAAgCgCQgDgCAAgFIACgJIAEgJQACgGADgCQADgBAHAAIAJAAIAQABIAfgCIAFAAQAGAAACACQADACAAAFQAAAJgGAKQgGAIgIAAIgJAAIgKAAIgoABIgDAAg");
	this.shape_19.setTransform(-15.5,-21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("AhUB5QgJgHAAgNQAAgIAHgHQAGgGAKgBIAIABIAFAFIAFAGQAFAIADAAQAKAAAJgNQAJgOAAgOQAAgQgMgdIgCgFIgeg/IgQgkQgDgGgLgEIAAgBQgGgCgCgDQgDgDAAgDQAAgJAKgDQAJgCAbAAQAbAAAJACQAJADAAAHIgCAGIgDADIgHAEQgGACAAADIADAPIAPAkIAOAjQAFAIADAAQABAAAFgIIALgdIAOgkQAEgOAAgEQABgFgLgHQgKgFAAgFQAAgGAJgDQAHgDAVABQAXAAAHACQAIADAAAHQAAAIgLACIgHADQgKAFgMAgIgGANIgXA7QgeBMgTAXQgTAXgbgBQgNABgJgIg");
	this.shape_20.setTransform(-31.2,-17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhiIgRAAIgFgBIgCgFIAAgEQAAgGATgRIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAAAjIApAAQAEAAACABQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAYAEAFQAEAGALABQAFAAAKgEIAMgDQAEABADACQACADAAADQAAALgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_21.setTransform(-47.3,-23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgGAJgDIAFgCQAEgDACgGQACgFAAgOIAAgNIAAgOIAAgLQAAgigCgJQgBgLgEgCIgIgDQgLgDAAgHQAAgEAEgDQACgDAJgEIAZgIIAPgDQAKABADAYIAAADIAAABQAKgOAKgIQAKgIALAAQANAAAHAIQAIAIAAAMQAAANgGAHQgGAIgKgBIgKgBIgHgGIgEgGQgCgGgDAAQgMAAgFASQgEASAAA2QAAAQABAJQADAHAFADIAHACQAKADABAIQAAAHgKADQgLADgYAAQgcAAgJgDg");
	this.shape_22.setTransform(-60.8,-21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("AAgBWIgJgJIgIAEQgWAPgXAAQgbAAgQgQQgQgPAAgaQAAgdAVgPQAVgRAnAAQAIAAAFADQAFADAAAHQAAAKgNAAQgSAAgLAIQgLAJAAAQQAAAOAKAJQAJAJARAAQAQAAAIgIQAIgIgBgTIAAhFQAAgQgGgJQgIgJgMAAQgIAAgIAFQgIADgHAJIgEAEQgLAOgMAAQgIAAgEgEQgEgFgBgIQAAgRAWgMQAVgMAhAAQAUAAAOAGQAPAFAJAKQAEAHADAMQACALAAAaIAAA6QABALABAFQACAFAEABIAFABQAMAEAAAGQAAAIgNAIQgMAHgQAAQgIAAgKgKg");
	this.shape_23.setTransform(-78.2,-21.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("AhfCBQgJgCgBgJQABgHAKgEIAJgFQADgDACgVQACgWAAg5IgChFQgBgagCgEQgDgDgJgEQgKgEAAgGQABgHAFgDQAGgEALAAIATAAIAVAAIAlgBIAdAAQAoAAAVARQAUASABAiQAAAngZAVQgaASgwABQgTAAABgNQAAgMAPAAQAXAAAOgMQAOgMAAgcQAAgZgOgMQgOgMgdABQgOAAgGABQgFADgBAFIgDARIgBAmIAABQIABA0QACANADADIAJAEQALAEgBAHQABAJgLACQgKAEgcAAQgdAAgLgEg");
	this.shape_24.setTransform(-99,-25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyperfect, new cjs.Rectangle(-123.2,-49.5,246.5,91), null);


(lib.nineteenvideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("Ao/DDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIR/AAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenvideo, new cjs.Rectangle(-77.1,-19.5,154.3,39.1), null);


(lib.nineteentopright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteengrapes();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-75.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteentopright, new cjs.Rectangle(-42.5,-75.5,85,151), null);


(lib.nineteenrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63900").s().p("Ao/DDQhRAAg5g5Qg5g5AAhRIAAAAQAAhQA5g5QA5g5BRAAIR/AAQBRAAA5A5QA5A5AABQIAAAAQAABRg5A5Qg5A5hRAAg");
	this.shape.setTransform(0,-8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenrectangle, new cjs.Rectangle(-77.1,-27.5,154.3,39.1), null);


(lib.nineteencrackers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteencrackers();
	this.instance.parent = this;
	this.instance.setTransform(-16,-46);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteencrackers_1, new cjs.Rectangle(-16,-46,32,92), null);


(lib.nineteencheese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteenchease();
	this.instance.parent = this;
	this.instance.setTransform(-93,-64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteencheese, new cjs.Rectangle(-93,-64.5,186,129), null);


(lib.nineteenbottomright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteentomatoes();
	this.instance.parent = this;
	this.instance.setTransform(-84.5,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenbottomright, new cjs.Rectangle(-84.5,-118,169,236), null);


(lib.nineteenbottomleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nineteencocktail();
	this.instance.parent = this;
	this.instance.setTransform(-55.5,-113);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nineteenbottomleft, new cjs.Rectangle(-55.5,-113,111,226), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.kalelogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(35,15.9,0.269,0.269);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgVgDgGgEQgKgFAAgNQAAgKAFgHQAHgHAIAAIARAAQAKAAAFgLQACgKABgXIAAl5QgBgXgCgKQgFgLgKAAIgRAAQgIAAgHgHQgFgHAAgKQAAgNAKgFQAGgEAVgDQBdgNBrAAQBOAAA2ASQA0ASAnAoQAlAlAUA5QAUA4AABEQAABNgZA9QgaA+guAlQglAegxAOQgwAOhFAAQhrAAhdgNgAgwjrQgcAFgJALQgKAMAAAhIAAFjQAAAhAUALQAOAHAnADQBMAEAthAQAqg/AAhwQAAhwgqg/Qgrg/hKAAIgeADg");
	this.shape_1.setTransform(16.7,8.1,0.269,0.269);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(21.8,23.7,0.269,0.269);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(14,23.7,0.269,0.269);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(6.1,23.7,0.269,0.269);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIgfgyQgGgJgKAAIgtAAQgDAAgEADQgEAEABADIAAAyQAAAGgKACIgPAAQgMAAAAgMIAAi5QgBgIAKAAIBqAAQAgAAAUATQAVATAAAfQAAAYgPAPQgIAJgPAKQgHAGADAGIAjAyQAFAIgFADQgEAFgPAAQgQAAgHgJgAg4g4IAAAuQAAAFAEADQAEACAFAAIA+AAQAQAAALgIQALgIAAgRQAAgQgLgJQgLgJgQABIg+AAQgNAAAAAKg");
	this.shape_5.setTransform(-3,23.7,0.269,0.269);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAAAABgBQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-11.9,23.7,0.269,0.269);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBkQgFgDAAgEIgOhsQgCgGgFAAQgDAAgDADIgxA+QgEAGgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBoQgCALgTAAQgGAAgFgDQgGgDAAgFIAViwQACgJADgEQAEgEALAAQAKAAAFAJIA4BPQAFAHAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAIIAVC1QABALgXAAQgFAAgFgDg");
	this.shape_7.setTransform(-21,23.7,0.269,0.269);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(3.9,-14.6,0.269,0.269);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDwQhFg1gYheIgBgCQgCgMgHAAQgGAAgCALIgBACQgYBfhGA1QhIA3hoAAQh+AAhMhQQhMhQAAiFQAAiHBMhRQBLhQCAAAQBpAABHA3QBHA2AXBgQACALAGAAQAHgBACgKIABgBQAXhgBGg1QBHg3BoAAQB/AABNBQQBMBPAACFQAACHhMBRQhNBRiBAAQhmAAhHg3gACniqQgpA/AABuQAABrApA/QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/gAmFiqQgoA/AABuQAABsAoA+QAoA9BIAAQBGAAApg/QApg/AAhrQAAhsgqg+QgphAhHAAQhGAAgoA/g");
	this.shape_9.setTransform(-5.6,8.1,0.269,0.269);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-26.4,8.1,0.269,0.269);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIIAJgFQAEgCAFAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(29.6,8.1,0.269,0.269);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAHQgNAJgQAAQgTAAgKgJQgLgJgJgYIimm+QgKgagHgHQgHgHgUgFQgOgCgFgFQgFgFAAgLQAAgVAdgBICvAAQAcAAAAAYQAAAKgHAFQgHAFgRABQgOACgGAFQgGAFAAAJQAAAJADAKIBzFHQACAGAFgBQAEAAACgGIA/i2QAIgYgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgDgGgGQgFgEAAgKQAAgaAdAAICnAAQAdAAAAAYQAAASgcAEQgRACgFAFQgGAFAAAMQAAAKAIAZIBfEsQACAFAEAAQAFAAABgGIBdk6QAEgLAAgJQAAgSgdgEQgbgCAAgVQAAgNAHgGQAIgFARgBIElAAQAVABAIAFQAIAFAAAOQAAAKgGAIQgGAGgJAAIgQAAQgLAAgFALQgCAIAAAZIAABtQAAAeAFAGQAGAHAXAAIB0AAQAXAAAHgIQADgDAAgHIABgdIAAhpQAAgbgDgGQgFgLgKAAIgQAAQgKAAgHgGQgGgIAAgKQAAgOAIgFQAJgFAWgBICaAAQAWABAJAFQAJAFAAAOQAAAKgHAIQgGAGgJAAIgSAAQgEAAgEADQgFADgBAFQgDAJAAAYIAAF9QAAAXADAKQABAFAFACQAEADAEABIASAAQAJAAAGAGQAHAIAAAJQAAAOgJAFQgIAGgXAAIiaAAQgWAAgIgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIAQAAQAKAAAFgLQADgGAAgbIAAh8IgBgeQAAgHgDgEQgHgHgXAAIh0AAQgXAAgGAGQgFAHAAAdIAACCQAAAYACAJQAFALALAAIAQAAQAJAAAGAGQAGAIAAAKQAAAOgIAEQgIAGgVAAIiaAAQgWAAgJgGQgIgFAAgOQAAgJAGgIQAHgGAJAAIARAAQAEgBAFgDQAEgCABgFQADgGAAgbIAAl9QAAgwgkAEQgLABgHAKQgIAIgGAWIiHGzQgJAfgKALQgLALgTAAQgTAAgLgJg");
	this.shape_12.setTransform(-20.1,-9.9,0.269,0.269);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgFAAgOQAAgKAGgHQAGgGAJAAIARAAQAEAAAEgDQAEgEACgEQADgIAAgXIAAl/QAAgZgDgJQgDgLgLABIgRAAQgKgBgGgGQgHgHAAgLQAAgNAJgGQAJgFAWAAICcAAQAWAAAJAFQAJAGAAANQAAALgGAHQgHAGgJABIgSAAQgOgBgDALQgDAGAAAcIAAFjQAAAdACAJQACAJAIAFQAGAEALACQALACAagBIAwAAQAvAAAPgfIAIgPQAIgQAPgBQAMAAAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(18.6,-10,0.269,0.269);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgDALgHAFQgHAFgOAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(30.7,-10,0.269,0.269);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZNQk7iFjyjyQjyjziFk6QiJlFAAljQAAlkCJlFQCFk6DyjzQDzjyE6iFQFFiJFjAAQFkAAFFCJQE6CFDyDyQDyDzCGE6QCJFFAAFkQAAFjiJFFQiGE6jyDzQjyDyk6CFQlFCJlkAAQljAAlFiJg");
	this.shape_15.setTransform(0,0,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.kalelogo, new cjs.Rectangle(-47,-47,94,94), null);


(lib.holidaysmallbite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgcAoAAQAkAAAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgDQgDgDAAgFQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgEAJgFIAGgGQAKgIAFAAQAEABACADQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmgBgagag");
	this.shape.setTransform(125.5,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgFAJgEIAFgCQAEgCADgHQABgFAAgOIAAgNIAAgOIAAgLQAAghgBgKQgCgLgEgCIgIgDQgLgEAAgGQAAgEAEgDQACgEAJgDIAZgHIAPgEQAKABADAYIAAADIABABQAJgPAKgHQAKgIALAAQANAAAHAIQAIAHAAANQAAANgGAHQgGAIgKgBIgKgBIgHgGIgEgGQgCgGgDAAQgMAAgFASQgEARAAA3QAAAQABAJQADAHAFACIAHADQAKADABAIQAAAHgKADQgLADgYAAQgcAAgJgDg");
	this.shape_1.setTransform(108.9,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AhCBFQgagbAAgpQAAgoAcgcQAbgbAoAAQAnAAAZAZQAaAaAAAoQAAApgbAdQgbAcgnABQgoAAgagbgAgig2QgLAPAAAYQAAAkAPAYQAPAZAWAAQARAAAMgPQALgPAAgZQAAgjgQgYQgQgZgUAAQgSAAgLAPg");
	this.shape_2.setTransform(90.8,37.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("ABFCBQgLgDAAgIQAAgIAMgEIAIgEQADgDABgIQACgIAAgYIAAgKIgBhNIAAguIgXA8Qg2CMgMAAQgFAAgLgTQgKgTgag8IgohcIgCBIIAAAxIABAiQABAJADACIAIAEQALAEAAAIQAAAHgJAEQgKADgWAAQgUAAgJgEQgJgDAAgIQAAgGAKgFQAKgFABgDQACgJADgvQADguAAg6IAAgGQAAgTgCgHQgBgGgFgDIgIgEQgMgEAAgIQAAgHAIgCQAJgDAaAAIAaAAIAIACQADACANAhIAKAaIAGANQAsBtADAAQAEAAAQgnQARgmAWhBIAEgLQAHgUAFgGQADgEAHgBIAZgBQAZAAAIADQAIACAAAHQAAAIgKAEIgFACQgGADgBAHQgCAHAAAdIACBnQABAvACAHQABAEAIADIAEACIAHAEQACADAAAEQAAAIgKADQgKADgeAAQgcAAgJgDg");
	this.shape_3.setTransform(63.5,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AhuBvQgigaAAgrQAAgXALgTQALgRAYgQIAAgCQgHgIgEgJQgFgJABgJQAAgdAVgSQAVgTAhAAQAXAAAPAJQAPAJAAALQAAAEgDADQgFADgEAAIgOgFQgNgEgLAAQgPAAgJAJQgJAKABAQQAAAHACAFQACAFAFAFQAEAEAIAEIALAEIAEABIABADQAAAEgHAIQgGAHgGAAIgIgBIgNgFQgKAJgFAMQgGANAAARQAAAjAXAWQAXAXAjAAQAeAAASgPQASgQAAgYQAAgQgHgJQgIgJgNAAQgMAAgJAHQgHAIAAALIAAAEIAAACIgCABIgDAAQgHAAgEgFQgDgFAAgJQgBgbBQglIAGgCQAUgKALgLQALgLAAgNQABgJgFgEQgFgEgKAAIgHABIgGAAQgEAAgCgCQgDgDAAgEQAAgIAKgFQAKgFAQAAQATAAALAKQAMALAAATQAAAXgUASQgUATgpAPQASAGAIAOQAJAOAAASQAAAOgFANQgGANgKAMQgRASgZAJQgZAJggAAQg3AAgigag");
	this.shape_4.setTransform(21.4,33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AgNBfIgUgDIgFADIgGABIgEgBIgDgCQgGgGgGgOQgFgPAAgNQAAgGADgEQADgEAFAAQAIAAAJAPIAHALQAFAHAKAEQAJAFAKAAQANgBAHgGQAHgGAAgKQAAgPgegPIgLgGQgcgOgKgLQgKgMAAgRQAAgXAQgPQARgQAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAPAAAQQAAAGgDADQgDAEgFAAQgFAAgEgDQgEgEgFgIQgHgMgHgEQgIgFgKAAQgKAAgGAGQgHAGAAAKQAAAIAHAGQAHAHAWALIACACQAzAXAAAfQAAAZgUARQgTARgeAAg");
	this.shape_5.setTransform(-13.9,37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgFAJgEIAFgCQAFgCACgHQACgFAAgOIAAgNIgBgOIAAgLQAAghgBgKQgCgLgEgCIgIgDQgLgEAAgGQAAgEADgDQAEgEAIgDIAYgHIAQgEQAKABACAYIABADIABABQAJgPALgHQAKgIAKAAQAMAAAIAIQAIAHAAANQAAANgGAHQgGAIgKgBIgJgBIgIgGIgFgGQgBgGgDAAQgMAAgFASQgEARAAA3QAAAQACAJQABAHAGACIAGADQAMADAAAIQAAAHgLADQgKADgYAAQgcAAgJgDg");
	this.shape_6.setTransform(-28.7,37.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgcAoAAQAkAAAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgDQgDgDAAgFQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgEAJgFIAGgGQAKgIAFAAQAEABACADQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmgBgagag");
	this.shape_7.setTransform(-46.2,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhiIgRAAIgFgBIgCgFIAAgEQAAgGATgRIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQABABAAABQAAAAAAABIAAAjIApAAQAEAAACABQACACAAAFIAAAEQAAAFgCACQgCADgEgBIgmAAIgDACIgBAEIAABaQAAAYAEAFQAEAHALAAQAFAAAKgEIAMgDQAEABADACQACADAAADQAAALgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_8.setTransform(-62.6,35.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhiIgRAAIgFgBIgCgFIAAgEQAAgGATgRIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAAAjIApAAQAEAAACABQACACAAAFIAAAEQAAAFgCACQgCADgEgBIgmAAIgDACIgBAEIAABaQAAAYAEAFQAEAHALAAQAFAAAKgEIAMgDQAEABADACQACADAAADQAAALgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_9.setTransform(-76,35.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AAgBWIgJgJIgIAEQgWAPgXAAQgbAAgQgQQgQgPAAgaQAAgdAVgPQAVgRAnAAQAIAAAFADQAEADABAHQAAAKgNAAQgSAAgLAIQgLAJAAAQQAAAOAKAJQAJAJARAAQARAAAHgIQAIgIgBgTIAAhFQAAgQgGgJQgIgJgMAAQgIAAgIAFQgIADgHAJIgEAEQgLAOgMAAQgIAAgEgEQgEgFgBgIQAAgRAWgMQAVgMAiAAQATAAAOAGQAPAFAIAKQAFAHADAMQADALgBAaIAAA6QABALABAFQACAFAEABIAFABQAMAEAAAGQgBAIgMAIQgMAHgQAAQgJAAgJgKg");
	this.shape_10.setTransform(-92.5,37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgeCDQgJgCAAgJQAAgFAIgEIAJgFQADgDABgLIACgkIAAgcIgBgiIAAgPQAAgtgBgOQgCgOgEgBIgLgFQgMgDAAgGQAAgFAEgDQAEgDANgEIAYgHIASgCQAGAAACADQACADAAAJIAAAOQgCBBAABBIABA/QABAOADADIAKAFQAJAEAAAHQAAAHgJACQgJADgYAAQgbAAgJgDg");
	this.shape_11.setTransform(-108.3,33.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AhfCCQgKgEAAgIQAAgHALgFIAJgDQAEgEACgVQABgWAAg5IgBhFQgCgagDgEQgCgCgJgFQgKgDAAgHQABgHAFgDQAGgEALAAIATABIAVAAIAlgCIAcAAQApAAAVARQAUASAAAiQABAngZAVQgaASgxABQgSAAAAgNQAAgMAQAAQAXAAAOgMQAPgNAAgbQAAgZgPgMQgOgMgeABQgNAAgGABQgFACgCAGIgCARIgBAlIAABQIABA1QACANADADIAJADQAKAFABAHQAAAIgKAEQgKADgeAAQgcAAgLgDg");
	this.shape_12.setTransform(-124,33.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgTA4QgEgCAAgCIAEgIIADgFIALgUQAEgJAAgEIgBgFIgGgDQgKgEgEgGQgEgHAAgJQAAgNAHgIQAHgIAMAAQALAAAIALQAIALAAAQQABAMgGANQgFANgLAUIgKAOQgDAFgDAAQgGAAgDgCg");
	this.shape_13.setTransform(96.7,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AgNBfIgUgEIgFAEIgGABIgEgBIgDgCQgGgFgGgPQgFgPAAgOQAAgFADgEQADgEAFAAQAIAAAJAOIAHAMQAFAHAKAEQAJAFAKgBQANAAAHgFQAHgHAAgKQAAgQgegOIgLgFQgcgOgKgMQgKgLAAgSQAAgXAQgQQARgPAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAOAAARQAAAGgDAEQgDADgFAAQgFAAgEgDQgEgDgFgKQgHgLgHgEQgIgFgKAAQgKAAgGAGQgHAGAAAJQAAAJAHAGQAHAHAWALIACABQAzAYAAAeQAAAagUARQgTARgeAAg");
	this.shape_14.setTransform(82.8,-6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("Ag7BFQgagaAAgoQAAgqAbgcQAbgcAoAAQAkAAAUAVQAVAUAAAiQAAALgDAEQgEAEgNAAIhGAAQgGgBgDgDQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXABQANAAAKgDQAJgEAJgFIAGgGQAKgHAFgBQAEAAACADQADADAAADQAAAFgFAGQgEAHgIAGQgQANgPAGQgOAGgSgBQgmAAgagag");
	this.shape_15.setTransform(64.9,-6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgbIAAhhIgRAAIgFgCIgCgFIAAgEQAAgHATgQIAIgGIAHgGQATgRAHAAIAFABQAAABABAAQAAABAAAAQAAABABABQAAAAAAABIAAAiIApAAQAEAAACACQACACAAAFIAAAFQAAAEgCACQgCACgEABIgmAAIgDABIgBAEIAABaQAAAXAEAHQAEAFALAAQAFAAAKgDIAMgCQAEgBADADQACACAAAFQAAAKgPAJQgQAJgTAAQgLAAgJgDg");
	this.shape_16.setTransform(48.5,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AggCDQgJgDAAgJQAAgGAJgDIAFgCQAFgDABgGQACgGABgOIAAgMIAAgPIAAgTQAAgdgCgHQgBgJgEgCIgJgDQgLgEAAgGQAAgEAEgDQADgEAIgDIAbgJIATgDQAFAAACADQADAEAAAIIAAALIgBAJIgCAtIAAABIAAAtQAAASABAHQACAHAEACIAHADQAJAEAAAHQAAAHgJADQgIADgZAAQgaAAgKgDgAgWhcQgHgGgBgKQAAgKAJgHQAJgIAMAAQALAAAIAHQAIAHAAAKQgBAKgHAHQgKAHgLAAQgMAAgIgHg");
	this.shape_17.setTransform(36.2,-10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AgNCEIgkgCIgSABIgUAAQgNAAgGgDQgHgDAAgHQAAgHAKgDQAJgFACgCQADgFABgaIAChHIgChFQgBgbgDgDQgCgDgJgDQgKgEAAgHQAAgIAGgCQAFgEALAAIAUAAIAVAAIAlgBIAcAAQAoAAAVARQAVAQAAAeQAAAZgPAQQgPAQgdAFQAlADATAQQAUATAAAeQAAAigZATQgYATgsAAgAgchqQgGACgBADQgDAFgBARIgBA1IAABLIABAkQABAKADAFQACAEAJACQAJACAPABQAeAAAQgNQAPgNAAgYQAAgZgSgNQgRgMghAAQgQgBAAgJQAAgNAPgBQAYABAQgLQAPgLAAgZQAAgXgOgMQgPgLgdAAg");
	this.shape_18.setTransform(18,-10);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("AgeCEQgJgDAAgJQAAgFAIgEIAJgFQADgDABgLIACgkIAAgdIgBgiIAAgNQAAgvgBgNQgCgNgEgDIgLgEQgMgCAAgHQAAgFAEgDQAEgDANgEIAYgHIASgDQAGABACADQACADAAAJIAAAOQgCBBAABBIABA/QABAOADADIAKAFQAJADAAAIQAAAHgJADQgJACgYAAQgbAAgJgCg");
	this.shape_19.setTransform(-10.7,-10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("AgeCEQgJgDAAgJQAAgFAIgEIAJgFQADgDABgLIACgkIAAgdIgBgiIAAgNQAAgvgBgNQgCgNgEgDIgLgEQgMgCAAgHQAAgFAEgDQAEgDANgEIAYgHIASgDQAGABACADQACADAAAJIAAAOQgCBBAABBIABA/QABAOADADIAKAFQAJADAAAIQAAAHgJADQgJACgYAAQgbAAgJgCg");
	this.shape_20.setTransform(-21.4,-10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AAgBWIgJgJIgIAEQgWAPgXAAQgbAAgQgQQgQgPAAgaQgBgdAWgPQAVgRAnAAQAIAAAFADQAEADABAHQAAAKgNAAQgSAAgLAIQgLAJAAAQQAAAOAJAJQAKAJARAAQARAAAHgIQAIgIAAgTIAAhFQgBgQgGgJQgIgJgLAAQgJAAgIAFQgIADgHAJIgEAEQgLAOgNAAQgGAAgFgEQgEgFgBgIQABgRAVgMQAVgMAiAAQATAAAPAGQAOAFAIAKQAFAHADAMQADALgBAaIAAA6QABALABAFQACAFADABIAGABQAMAEAAAGQgBAIgLAIQgNAHgQAAQgJAAgJgKg");
	this.shape_21.setTransform(-36.1,-6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("AiUBbQgJgDAAgJQAAgFAJgEIAFgBQAEgDACgGQACgHAAgNIAAgNIAAgOIAAgMQAAgggCgLQgBgJgEgDIgIgDQgLgDAAgHQAAgEADgDIALgGIAbgKIASgDQAFAAADADQADADgBAHIAAAJIAAACIABADIABAAIABAAIABgBIAEgEIACgCQAWgUAWAAQAJAAAIADQAIADAIAFQAFAEAHAIQAHAIABAAQADABAFgGIAIgIQAMgLAJgDQAIgEALAAQAVAAARAJQAPAJAHAOQAJASgBA0IABASIgBAKIAAAJQAAALACAEQACAFAFADIAEABQAKAEAAAFQAAAJgJACQgJADgcABQgaAAgJgDQgJgDAAgHQAAgHAKgEIAGgDQAFgCACgJQACgKgBgVQABg2gIgOQgHgOgUAAQgVAAgJASQgJASAAAtIAAAKQAAATACAHQACAGAEADIAFABQAJAEAAAFQAAAJgIACQgJADgcABQgZAAgIgDQgJgDAAgHQAAgHAJgEIAHgCQAEgCACgIQABgHAAgWQABg5gIgPQgIgOgTAAQgKAAgJAFQgIAHgFAJQgEAIgCAQQgCANAAAjQABARABAGQACAHAEACIAHACQAJAEAAAHQAAAHgJADQgJADgYAAQgcAAgJgDg");
	this.shape_22.setTransform(-63.4,-6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("AgtCEQgUgEgNgIQgHgEgFgPQgFgRAAgUQAAgJADgEQAEgFAGABQAIAAAJAQIAFAHQALAVAOAKQAOAIATABQATAAAOgMQAOgMAAgSQAAgZg2gYIgGgCQgsgTgPgQQgOgQAAgaQAAghAYgVQAYgVAngBIAVACIAZAGIAIgEIAGgCQAEAAAEADQADACAEAIQAGAKAEAMQAEAMAAAKQAAAGgDAEQgDACgFAAQgKABgJgNIgDgEQgKgOgMgGQgNgHgPAAQgUAAgLAKQgMAKAAAQQAAAPAKAKQAJAKAnAQIAIAEQAgAOAPAMQAKAJAFANQAGAMAAAPQAAAlgaAUQgbAWgtAAQgXgBgUgEg");
	this.shape_23.setTransform(-91.1,-10);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("AhUB5QgJgHABgMQgBgKAHgGQAGgHAJAAIAJACIAFAEIAFAHQAEAHAEAAQAJAAAKgOQAJgNAAgPQAAgPgMgdIgCgEIgehAIgQgkQgDgGgLgFIAAAAQgGgCgCgCQgDgEAAgDQAAgIAKgDQAJgEAbAAQAbAAAJAEQAJACAAAIIgBAFIgEAEIgHACQgGAEAAADIADANIAPAlIAOAiQAFAJADAAQACAAAEgJIALgcIAOglQAFgNgBgEQABgGgLgFQgKgGAAgFQAAgGAJgDQAHgDAVAAQAWAAAIAEQAIACAAAIQAAAGgLADIgHACQgKAGgMAfIgGAPIgXA5QgeBNgTAWQgTAYgbAAQgNgBgJgHg");
	this.shape_24.setTransform(56.2,-45.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006E47").s().p("AAhBWIgKgJIgIAEQgWAPgWAAQgbAAgRgQQgRgPAAgaQAAgdAWgPQAVgRAmAAQAJAAAFADQAEADAAAHQAAAKgMAAQgSAAgLAIQgLAJAAAQQAAAOAJAJQAKAJAQAAQARAAAIgIQAIgIAAgTIAAhFQAAgQgHgJQgIgJgLAAQgKAAgHAFQgIADgHAJIgEAEQgLAOgNAAQgGAAgFgEQgFgFAAgIQABgRAVgMQAVgMAiAAQATAAAPAGQAOAFAIAKQAFAHADAMQACALAAAaIAAA6QAAALACAFQACAFADABIAGABQALAEAAAGQABAIgMAIQgNAHgQAAQgJAAgIgKg");
	this.shape_25.setTransform(37,-49.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006E47").s().p("AhQBvQgVgZAAgoQAAgsAZgbQAZgdAnABIAMABQAGACADAEQADAEAAAFQAAAJgMABIgFgBIgEAAQgVgBgMASQgMAPAAAdQAAAeANAUQANATAVAAQASAAALgKQALgLAAgUIAAgzIAAhTQgBgNgCgEQgDgGgGgCIgFgBQgLgEAAgGQgBgGAFgDQAEgEAOgEIAVgGIARgCQAGAAADADQADADAAAJIAAAJIgDBwIACBNQABASADACIAMAEQAKACAAAGQAAAJgaAIIgSAGIgPABQgEAAgDgDQgDgCABgHIAAgIIAAgEIgBgCIgHAFIgIAFQgLAJgJAEQgKADgMAAQgiABgWgZg");
	this.shape_26.setTransform(16.4,-53.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006E47").s().p("AggCDQgIgDgBgJQABgGAIgDIAFgCQAFgDACgGQACgGAAgOIAAgMIAAgPIAAgTQgBgdgBgHQgCgJgDgCIgJgDQgLgEAAgGQAAgEADgDQAEgEAIgDIAcgJIASgDQAFAAACADQACAEABAIIAAALIgBAJIgBAtIAAABIgBAtQAAASACAHQABAHAEACIAHADQAJAEAAAHQAAAHgJADQgJADgXAAQgcAAgJgDgAgVhcQgIgGAAgKQgBgKAJgHQAJgIAMAAQALAAAIAHQAHAHAAAKQABAKgJAHQgJAHgLAAQgMAAgHgHg");
	this.shape_27.setTransform(-0.8,-53.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006E47").s().p("AgeCDQgJgDAAgIQAAgGAIgDIAJgFQADgDABgLIACgkIAAgcIgBgjIAAgOQAAgugBgNQgCgOgEgCIgLgDQgMgEAAgGQAAgEAEgDQAEgEANgEIAYgHIASgCQAGAAACADQACADAAAJIAAAOQgCBBAABCIABA+QABAOADADIAKAFQAJAEAAAGQAAAIgJACQgJAEgYAAQgbAAgJgEg");
	this.shape_28.setTransform(-11.8,-53.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006E47").s().p("AhCBEQgagaAAgpQAAgpAbgbQAbgcApABQAnAAAZAaQAaAZAAAoQAAApgbAdQgbAdgngBQgoAAgagbgAgig2QgLAPAAAZQAAAjAPAZQAQAYAUAAQATAAALgPQALgQAAgYQAAgjgQgYQgQgZgUABQgSgBgLAPg");
	this.shape_29.setTransform(-27.2,-49.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006E47").s().p("AApCBQgKgDAAgIQAAgIALgEIAIgEQADgDACgLIABgrIgBgZIgBgIQgCgDgJgCQgJgBgiAAIgmABQgKABgEADIgCAFIAAAOIAAAPIABArQABALADADIAIAEQALAEAAAIQAAAIgKADQgKADgdAAQgcAAgLgDQgKgDAAgIQAAgIALgEIAJgEQADgDACgXQACgXAAg3IgChEQgBgbgDgEQgBgCgKgEQgKgEAAgIQAAgHAIgCQAIgDAhAAQAgAAAJADQAIACAAAHQAAAIgLAEIgIAEQgDADgCALIgBA2QAAAHAHADQAHADAaAAIAPAAIAngBQALgCADgCIACgEIABgHIAAgIIgBgtQgCgKgDgCIgIgEQgLgEAAgIQAAgHAIgCQAJgDAgAAQAhAAAIACQAIADAAAHQAAAIgLAEIgJAEQgDADgCAZQgCAYAAAxIACBHQABAbADAEQABADAKAEQAKADAAAIQAAAIgKADQgLADgcAAQgdAAgKgDg");
	this.shape_30.setTransform(-51.8,-53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holidaysmallbite, new cjs.Rectangle(-137.6,-77.4,275.2,134.5), null);


(lib.greyrectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgWVgteMAsrAAAMAAABa9MgsrAAAg");
	this.shape.setTransform(0,0,1.045,1.029);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.greyrectangle, new cjs.Rectangle(-150.5,-300.5,301,601), null);


(lib.getpartystarted = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("Ag0A/IgFgBQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAhyQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIAvAAIAMABIANAEQAMAEAKAIQAJAJAFALQADAGABAGQABAHAAAGQAAAOgFAMIgGALIgJAJIgKAHIgLAFQgMAFgNAAgAgigmQgCACAAADIAABFQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAIAEACIAXAAQAIAAAIgDQAIgDAGgFQAGgFAEgIQADgHAAgKQAAgIgDgIQgEgHgGgGQgGgFgIgDQgIgDgIAAIgWAAQgDAAgDACg");
	this.shape.setTransform(114.1,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("AgqA/IgEgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhzQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgCIBXAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABIABADIAAAFIAAAEIgBAEIgDADIhBAAIgDACIgCAEIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIApAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABAFIABAFIAAADQAAAFgFACIgoAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAATQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAIBAAAQAEACAAAFIAAAEIAAAFIgCAEQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_1.setTransform(100.5,-3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("AACA/IgDAAIgHgBQgCgBAAgEIAAhcQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCIgKAAIgJAAIgGAAQgDAAgBgDQgCgCAAgDIAAgEIABgFIACgDIADgBIBXAAQADAAABACIACAGIgBAEIAAAEIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgaAAQgCAAgDACQgCABAAAEIAABbQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDACg");
	this.shape_2.setTransform(88.2,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AAfA/IgCAAIgDgCIgCAAIgVgiIgDgEQgCgBgEAAIgQAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAABAAAAQgBABAAAAQAAABAAAAIAAAgQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABIgFAAIgEAAQgEAAgCgBQgCgBAAgEIAAhzQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIADgBIA1AAQAKAAAIADQAJADAFAFQAGAGAEAIQADAHAAALQAAALgEAGQgEAGgFADIgIAIQgEACAAACIAAAEIAEAGIAIALIAHAKIACAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACIgFACIgEABgAgZgoQgDABAAAEIAAAcQAAAEADABQACACADAAIAZAAQAGAAADgBQAFgBADgCQAEgDACgEQABgEAAgFQAAgLgHgFIgIgEIgJgBIgZAAIgFABg");
	this.shape_3.setTransform(76.6,-3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AAuA/IgHAAQgDgBgCgDIgHgRIgCgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgqAAIgCAAIgCABIgCACIgBABIgGARIgDACIgDABIgEABIgDAAIgEAAIgEAAIgDgCIgBgCIAzh2QAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAEgBIAFABQAEAAABADIAxB1IAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgFABgAgBgTIgBABIgBAEIgDAGIgDAHIgDAGIgCAGIgBACIABADIACABIAZAAIACgBIABgCIgCgGIgEgJIgEgLIgDgGIgDgBg");
	this.shape_4.setTransform(63.1,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AACA/IgEAAIgFgBQgEgBAAgEIAAhcQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCIgKAAIgKAAIgEAAQgEAAgCgDQgBgCAAgDIAAgEIABgFIABgDIAFgBIBWAAQADAAACACIABAGIgBAEIAAAEIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgYAAQgEAAgCACQgBABAAAEIAABbQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
	this.shape_5.setTransform(51.4,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgcA9QgNgFgKgLIgBgCIgBgCIACgEIADgEIAFgEIAEgBQADAAADADIAIAFIALAFQAGACAIAAIAJAAQAFgBAFgCQAEgCADgEQADgEAAgFQAAgFgDgEQgEgCgFgCIgNgDIgOgCIgPgDQgHgCgGgDQgGgEgDgFQgEgHAAgKQAAgKAFgHQAFgHAIgEQAIgFAJgDQAJgBAHAAIANAAIAMADIAMAFIAKAIIABACIAAABIgBAGIgEADIgFADIgFABIgDgBQgHgFgHgEQgIgDgIAAIgIABQgFABgEABQgEADgCADQgDAEAAAEQAAAIAGACQAGADAJACIASADQALABAJADQAJADAGAHQAGAGAAAOQAAALgFAHQgGAIgIAFQgIAFgJADQgKACgJAAQgNAAgOgEg");
	this.shape_6.setTransform(39.7,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AgEBCIgDgBIgCgCIgBgDIAAgsIgCgHIgDgGIgkg3IAAgCIABgEIAEgDIAFgDIAEAAIAEABIADACIAZApIADACIACABIADgBIACgCIAZgpIAEgDIAEgBIAEABIAFACIAEADQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAACIAAACIgkA3IgEAIIAAACIgBACIAAAtQgCAFgEABIgGAAg");
	this.shape_7.setTransform(21.7,-3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("AACA/IgDAAIgHgBQgCgBAAgEIAAhcQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCIgKAAIgJAAIgGAAQgDAAgBgDQgCgCAAgDIAAgEIABgFIACgDIADgBIBXAAQADAAABACIACAGIAAAEIgBAEIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgaAAQgCAAgCACQgDABAAAEIAABbQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDACg");
	this.shape_8.setTransform(10.4,-3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AAfA/IgCAAIgDgCIgCAAIgVgiIgDgEQgCgBgEAAIgQAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgBAAAAABQAAABgBAAQAAABAAAAQAAABAAAAIAAAgQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgEABIgFAAIgEAAQgEAAgCgBQgCgBAAgEIAAhzQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAEgBIA1AAQAJAAAIADQAJADAFAFQAGAGAEAIQADAHAAALQAAALgEAGQgEAGgFADIgJAIQgDACAAACIAAAEIAEAGIAIALIAHAKIACAGQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACIgFACIgEABgAgZgoQgDABAAAEIAAAcQAAAEADABQACACADAAIAZAAQAGAAADgBQAFgBADgCQADgDADgEQABgEAAgFQAAgLgHgFIgIgEIgJgBIgZAAIgFABg");
	this.shape_9.setTransform(-1.1,-3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("AAuA/IgHAAQgDgBgCgDIgHgRIgCgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgqAAIgCAAIgCABIgCACIgBABIgGARIgDACIgDABIgEABIgDAAIgEAAIgEAAIgDgCIgBgCIAzh2QAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAEgBIAFABQAEAAABADIAxB1IAAABQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgFABgAgBgTIgBABIgBAEIgDAGIgDAHIgDAGIgCAGIgBACIABADIACABIAZAAIACgBIABgCIgCgGIgEgJIgEgLIgDgGIgDgBg");
	this.shape_10.setTransform(-14.6,-3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("AgsBAQgFAAgCgFIAAh2QAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIADgBIA2AAQAJAAAIADQAIADAGAFQAGAFAEAHQADAHAAAJIAAAHIgCAFQgFAMgIAFQgIAGgKACQgLACgKgBIgVAAIgCABIgCABIgBAEIAAAnIgDAEIgEABIgFAAgAgbgnQAAABAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAVIABAFQABAAAAAAQAAAAABABQAAAAABAAQABAAAAAAIAfAAIAIgBQADgBADgDQADgCACgDQACgDAAgEQAAgEgCgDQgCgDgDgCIgGgEQgDgBgDAAIggAAQgDAAgCACg");
	this.shape_11.setTransform(-26.7,-3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AgqA/IgEgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhzQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAEgCIBXAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIABADIAAAFIAAAEIgBAEIgDADIhBAAIgDACIgCAEIAAARQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIApAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABAFIABAFIAAADQAAAFgFACIgoAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAATQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIBAAAQAEACAAAFIAAAEIAAAFIgCAEQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_12.setTransform(-45.4,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgsBAIgEgBQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIAAh4IADgCIAEgCIAEAAIAFAAQAFAAACAFIAAAoQAAABAAAAQAAABAAABQABAAAAABQAAAAABABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIArAAQADAAACgCQACgCABgDIAAgoQACgEAEAAIAHgBIAFABIAFAEIgBB3QgBAEgEAAIgIAAIgFAAIgEgEIAAgsQAAgBgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgCgEAAIgpAAQgDAAgCADQgDACAAADIAAArQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgEABIgFABg");
	this.shape_13.setTransform(-59.2,-3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AACA/IgEAAIgFgBQgDgBgBgEIAAhcQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCIgKAAIgKAAIgEAAQgEAAgCgDQgBgCAAgDIAAgEIABgFIABgDIAFgBIBWAAQADAAABACIACAGIgBAEIAAAEIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgZAAQgDAAgDACQgCABAAAEIAABbQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEACg");
	this.shape_14.setTransform(-71.8,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AACA/IgDAAIgGgBQgDgBAAgEIAAhcQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAIgGgCIgKAAIgJAAIgGAAQgDAAgCgDQgBgCAAgDIAAgEIABgFIACgDIADgBIBXAAQADAAABACIACAGIgBAEIAAAEIgCAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgZAAQgEAAgCACQgCABAAAEIAABbQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgDACg");
	this.shape_15.setTransform(-88.3,-3.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgqA/IgEgCQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAhzQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIAEgCIBXAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAABABIABADIAAAFIAAAEIgBAEIgDADIhBAAIgDACIgCAEIAAARQAAAAAAABQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIApAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABAFIABAFIAAADQAAAFgFACIgoAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABIAAATQAAABAAAAQAAABAAABQAAAAABAAQAAABABAAQAAABABAAQAAAAAAAAQABABABAAQAAAAABAAIBAAAQAEACAAAFIAAAEIAAAFIgCAEQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_16.setTransform(-99.4,-3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AgKBAQgGgBgGgCQgHgDgEgEIgKgIQgGgEgDgFIgHgLQgEgMgBgOIACgNIADgNQAGgMAKgIIAKgIIALgGIAMgEIANAAIAPAAQAGACAHADQAOAGAKALIAAADIgCAEIgEAFIgFADIgEABQgDABgDgDIgGgGQgEgDgGgDQgHgDgIAAQgIAAgIAEQgIADgFAGQgHAGgDAIQgDAIgBAIQABAIADAIQADAJAHAGQAFAGAIADQAIADAIAAIAJAAIAJgCIAHgFIAGgHIAAgCQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIgDgBIgXAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAIgBgEIgBgFIAAgEIABgEQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAIA1AAIACABIADACQACAEAAAHIAAAFIgBAFQgFAKgFAIQgHAGgIAGQgIAFgJACQgJADgKAAQgGAAgHgBg");
	this.shape_17.setTransform(-114.2,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getpartystarted, new cjs.Rectangle(-123.3,-14.2,246.7,22.4), null);


(lib.getinspired = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAmIgTg4IgSA4IgQAAIgYhLIAPAAIARA5IABAAIASg5IAPAAIASA5IASg5IAQAAIgaBLg");
	this.shape.setTransform(29.9,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgFgDgIQgDgIAAgIQAAgIADgHQADgIAGgFQAFgFAHgDQAIgDAIAAQAJAAAHADQAHADAGAFQAFAFADAIQAEAHAAAIQAAAIgEAIQgDAIgFAFQgGAFgHADQgHADgJAAQgIAAgIgDgAgKgYQgEACgEAEQgDAEgCAEQgBAFgBAFQABAFABAFQACAGADADQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCAEgEQACgDADgGQABgFAAgFQAAgFgBgFQgDgEgCgEQgEgEgFgCQgEgCgGgBQgFABgFACg");
	this.shape_1.setTransform(18.4,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAnIAAgpIgBgJIgCgHQgCgDgDgDQgEgCgFAAQgIAAgGAHQgGAIAAAKIAAAoIgOAAIAAg6IAAgJIgBgIIAOAAIAAAHIAAAFIABAAIAEgFIAGgFIAHgDIAHgBQAHAAAFACQAGADADAEQAEAFABAFQACAFAAAHIAAAug");
	this.shape_2.setTransform(8.5,-7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnA6IAAhxIAOAAIAAAMIABAAQAEgGAHgEQAHgEAIAAQAJAAAHADQAHADAFAFQAFAGACAHQADAHAAAJQAAAIgDAHQgCAHgFAFQgFAGgHADQgHADgJAAQgHAAgHgEQgIgDgEgHIAAAAIAAAygAgKgqQgFACgDAEQgEADgBAFQgCAFAAAGQAAAFACAFQABAFAEADQADAEAFACQAFACAFAAQAGAAAEgCQAFgCADgEIAFgIIACgKQAAgGgCgFQgCgFgDgDQgDgEgFgCQgEgDgGAAQgFAAgFADg");
	this.shape_3.setTransform(-5.8,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAlQgHgDgFgFQgGgFgDgIQgDgIAAgIQAAgIADgHQADgIAGgFQAFgFAHgDQAIgDAIAAQAJAAAHADQAIADAFAFQAGAFACAIQAEAHAAAIQAAAIgEAIQgCAIgGAFQgFAFgIADQgHADgJAAQgIAAgIgDgAgKgYQgFACgDAEQgDAEgCAEQgBAFgBAFQABAFABAFQACAGADADQADAEAFACQAEACAGAAQAGAAAEgCQAFgCAEgEQACgDACgGQACgFAAgFQAAgFgCgFQgCgEgCgEQgEgEgFgCQgEgCgGgBQgGABgEACg");
	this.shape_4.setTransform(-16.3,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATA8IAAgqIgBgIQgBgEgCgDIgFgFQgDgBgFAAQgEgBgEACIgGAEQgGAHAAAMIAAAnIgPAAIAAh3IAPAAIAAA4QADgFAHgEIAHgEIAGgBQAIAAAFADQAFACAEAEQADAFACAEQACAGAAAHIAAAug");
	this.shape_5.setTransform(-26.2,-9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVA4QgKgFgGgIIAMgLQAEAHAHADQAGAEAIAAIAHgBQAEgBAEgDQADgCACgEQACgDAAgFQAAgGgCgDQgCgDgEgDQgEgDgFgBIgJgEIgLgDQgFgCgEgEQgEgDgDgFQgCgGAAgHQAAgJADgGQAEgGAFgEQAGgEAHgCIANgCIAJABIAJADQAJADAFAHIgLAKQgEgEgFgDQgGgDgHAAIgHABIgHADIgFAGQgCADAAAFQAAAEABAEIAFAFIAIAEIAIADIAMAEQAFACAFADQAFAEADAFQADAFAAAJQAAAJgDAGQgDAHgGAEQgFAEgHACQgIACgGAAQgLAAgKgDg");
	this.shape_6.setTransform(-36,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.getinspired, new cjs.Rectangle(-42.5,-20.8,81,23.7), null);


(lib.fourteentable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fourteentable();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fourteentable_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.crowdpleasing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006E47").s().p("AgNBfIgUgEIgFAEIgGABIgEgBIgDgCQgGgFgGgPQgFgPAAgNQAAgGADgEQADgEAFAAQAIAAAJAPIAHAKQAFAIAKAEQAJAEAKABQANAAAHgHQAHgGAAgKQAAgPgegPIgLgGQgcgOgKgKQgKgMAAgSQAAgYAQgPQARgPAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAOAAAQQAAAHgDADQgDAEgFAAQgFAAgEgDQgEgDgFgJQgHgMgHgFQgIgEgKAAQgKAAgGAGQgHAGAAAJQAAAJAHAHQAHAGAWAMIACABQAzAYAAAeQAAAZgUARQgTARgeAAg");
	this.shape.setTransform(123.4,21.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgIQAAgHAJgCIAFgDQAEgCACgHQACgFAAgPIAAgMIAAgPIAAgKQAAgigCgKQgBgKgDgCIgJgDQgLgDAAgHQAAgEAEgDQADgDAHgDIAagIIAQgEQAIAAADAZIABAEIAAABQAKgQAKgHQAKgIALAAQANAAAHAIQAIAHAAANQAAANgGAIQgGAGgKAAIgKgBIgHgFIgEgHQgCgFgCgBQgNAAgFASQgEARAAA3QAAARABAHQACAJAFABIAIADQALAEgBAHQABAHgKADQgLADgYAAQgcAAgJgDg");
	this.shape_1.setTransform(108.6,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006E47").s().p("Ag7BFQgagaAAgoQAAgqAbgbQAbgcAoAAQAkgBAUAVQAVAUAAAiQAAALgDAEQgEADgNAAIhGAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAmAAIAJgBQACgCAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAUQAOAWAXgBQANAAAKgDQAJgCAJgHIAGgFQAKgIAFABQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmAAgagbg");
	this.shape_2.setTransform(91.1,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgcIAAhhIgRAAIgFgBIgCgFIAAgFQAAgFATgQIAIgHIAHgHQATgQAHAAIAFACQAAAAABAAQAAABAAAAQAAABABABQAAAAAAABIAAAjIApAAQAEgBACACQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAXAEAGQAEAHALAAQAFgBAKgCIAMgEQAEAAADADQACACAAAEQAAAKgPAKQgQAJgTAAQgLAAgJgDg");
	this.shape_3.setTransform(74.7,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006E47").s().p("AgJBuQgJgDgGgGQgHgGgDgKQgCgKAAgcIAAhhIgRAAIgFgBIgCgFIAAgFQAAgFATgQIAIgHIAHgHQATgQAHAAIAFACQAAAAABAAQAAABAAAAQABABAAABQAAAAAAABIAAAjIApAAQAEgBACACQACACAAAFIAAAEQAAAFgCACQgCACgEAAIgmAAIgDACIgBAEIAABaQAAAXAEAGQAEAHALAAQAFgBAKgCIAMgEQAEAAADADQACACAAAEQAAAKgPAKQgQAJgTAAQgLAAgJgDg");
	this.shape_4.setTransform(61.3,20.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E47").s().p("AAhBWIgKgJIgIAEQgWAPgWAAQgbAAgRgQQgRgPAAgaQABgdAVgPQAVgRAmAAQAJAAAFADQAFADgBAHQAAAKgMAAQgSAAgLAIQgLAJAAAQQAAAOAJAJQAKAJAQAAQASAAAHgIQAHgIABgTIAAhFQAAgQgIgJQgGgJgNAAQgJAAgHAFQgIADgHAJIgEAEQgLAOgNAAQgGAAgFgEQgFgFABgIQAAgRAVgMQAVgMAhAAQAUAAAOAGQAPAFAJAKQAFAHACAMQADALAAAaIAAA6QAAALABAFQACAFADABIAGABQALAEAAAGQAAAIgMAIQgMAHgQAAQgIAAgJgKg");
	this.shape_5.setTransform(44.8,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E47").s().p("AgeCDQgJgDAAgIQAAgGAIgDIAJgFQADgDABgLIACgkIAAgcIgBgiIAAgPQAAgtgBgOQgCgOgEgCIgLgDQgMgEAAgGQAAgEAEgDQAEgEANgEIAYgHIASgCQAGgBACAEQACADAAAJIAAAOQgCBBAABCIABA+QABAOADADIAKAFQAJAEAAAGQAAAIgJACQgJAEgYAAQgbAAgJgEg");
	this.shape_6.setTransform(29,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E47").s().p("AheCCQgKgDAAgIQAAgIALgFIAIgDQADgDACgXQACgVAAg5IgChFQgBgbgCgDQgCgDgKgEQgKgDABgIQgBgGAGgEQAFgDAMAAIATABIAVAAIAlgBIAdgBQApAAAUASQAVARAAAiQgBAngZAVQgZASgxAAQgRAAAAgMQAAgMAPAAQAXAAAOgMQAOgMAAgbQAAgagOgMQgPgLgcgBQgOAAgFACQgGACgCAGIgBAQIgBAmIAABQIABA0QABAOADADIAIADQALAFAAAIQAAAIgKADQgJADgdAAQgdAAgKgDg");
	this.shape_7.setTransform(13.3,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E47").s().p("Ag7BFQgagaAAgoQAAgqAbgbQAbgcAoAAQAkgBAUAVQAVAUAAAiQAAALgDAEQgEADgNAAIhGAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAmAAIAJgBQACgCAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAUQAOAWAXgBQANAAAKgDQAJgCAJgHIAGgFQAKgIAFABQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmAAgagbg");
	this.shape_8.setTransform(-18.8,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E47").s().p("AgNBfIgUgEIgFAEIgGABIgEgBIgDgCQgGgFgGgPQgFgPAAgNQAAgGADgEQADgEAFAAQAIAAAJAPIAHAKQAFAIAKAEQAJAEAKABQANAAAHgHQAHgGAAgKQAAgPgegPIgLgGQgcgOgKgKQgKgMAAgSQAAgYAQgPQARgPAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAOAAAQQAAAHgDADQgDAEgFAAQgFAAgEgDQgEgDgFgJQgHgMgHgFQgIgEgKAAQgKAAgGAGQgHAGAAAJQAAAJAHAHQAHAGAWAMIACABQAzAYAAAeQAAAZgUARQgTARgeAAg");
	this.shape_9.setTransform(-36.8,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006E47").s().p("Ag7BFQgagaAAgoQAAgqAbgbQAbgcAoAAQAkgBAUAVQAVAUAAAiQAAALgDAEQgEADgNAAIhGAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAmAAIAJgBQACgCAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAUQAOAWAXgBQANAAAKgDQAJgCAJgHIAGgFQAKgIAFABQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmAAgagbg");
	this.shape_10.setTransform(-54.7,22);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E47").s().p("Ag7BFQgagaAAgoQAAgqAbgbQAbgcAoAAQAkgBAUAVQAVAUAAAiQAAALgDAEQgEADgNAAIhGAAQgGAAgDgCQgDgDAAgFQAAgFADgDQADgCAGAAIAmAAIAJgBQACgCAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAUQAOAWAXgBQANAAAKgDQAJgCAJgHIAGgFQAKgIAFABQAEAAACADQADACAAAEQAAAEgFAHQgEAGgIAGQgQANgPAGQgOAFgSABQgmAAgagbg");
	this.shape_11.setTransform(-74.4,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E47").s().p("AAaCDQgJgCAAgIQAAgGAJgEIAGgDQAFgCABgIQACgIAAgTQAAg8gIgNQgHgPgTAAQgJAAgJAGQgIAGgFAIQgFAJgBAOQgBANgBAkQABATABAGQABAGAFACIAGADQAKAEAAAGQgBAIgIACQgKAEgXAAQgdAAgIgEQgKgDABgIQgBgGAKgDIAEgCQAFgDACgHQACgJAAgTIAAgfIAAgbIgBhSQgBgUgDgFQgCgCgLgDQgKgDgBgGQABgGAEgDQAEgDARgGIASgGIARgBQAGgBADAEQACADAAAJIAAAHIgBBJIAAAJIAAAFIADABIAEgEIAGgHQAJgJALgFQAJgEALAAQAggBAPAVQAQAUAAApIAAARIAAAgIAAALQABAJABAEQACAEAEADIAEABQAJAEAAAGQABAIgJADQgJAEgdAAQgYAAgIgEg");
	this.shape_12.setTransform(-95.6,17.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006E47").s().p("AgcCAQgYgJgTgRQgVgTgLgbQgLgcAAgfQAAgaAHgWQAHgVAPgSQASgWAagMQAZgMAeAAIAWACIAkAIIAEgBIAOgDIAGABIAFAGQAGAKADAOQAEAOAAAKQAAAIgDAEQgCAEgGAAQgIAAgOgQIgMgOQgKgKgOgFQgPgGgRAAQgjAAgVAZQgUAYAAArQAAA2AaAiQAaAjAnAAQAQAAAPgFQAOgFAJgKIAJgKQAIgLAFAAQAFAAADAFQADAFAAAJQAAARgFAKQgEAKgJAAIgBgBIgDAAQgRAJgRAEQgRAFgTAAQgaAAgZgJg");
	this.shape_13.setTransform(-119,18);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006E47").s().p("AhDB4QgXgPAAgUQAAgJAEgGQAFgGAKAAQAIAAAEAEQAFAFACAIQAEAOAMAHQALAIAXAAQAXAAAQgJQARgKAAgOQAAgIgGgFQgHgFgLAAIgVACIgcABQggAAgSgLQgRgLAAgPQAAgJAGgJQAGgIAOgIQgLgJgFgMQgGgLAAgPQAAgdAXgUQAWgUAjAAIASACIAcAFQAHAAAIgDQAIgEALgIIAGAGIACAGQAAAIgGAHQgFAHgLAGIAGAPIACAPQAAAegXATQgWASgjAAIgUgBIgRgDIgFAGIgCAHQAAAJAIAEQAJAEASAAIAbgCIAdgCQAZAAAOAKQANALAAATQAAAdgcAUQgdATgrAAQgjAAgXgOgAgdhaQgKAMAAASQAAATAJALQAKALAOAAQAPAAAKgLQAKgMAAgSQAAgTgJgLQgKgMgPAAQgPAAgJAMg");
	this.shape_14.setTransform(124.6,-18.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006E47").s().p("AhZBbQgJgDAAgJQAAgFAJgEIAEgCQAFgDACgGQACgFAAgOIAAgNIAAgOIAAgSQAAgdgCgJQgBgJgEgCIgJgDQgLgDAAgHQAAgEAEgDQADgDAIgEIAagIIATgDQAGAAACACQACAEAAAFIAAANIAAACIACAAIABAAIAAgBIAFgEIADgDQAUgTAWAAQAOAAAMAGQAMAGAJAJQAIALADANQAEAOAAAeIAAAYIAAAMIAAAKQAAANACAFQABAFAFADIAFACQAJAEAAAFQAAAJgJACQgIAEgcAAQgagBgJgCQgIgDAAgHQAAgHAJgEIAHgCQAEgDACgHQABgJAAgTQAAg6gHgOQgIgQgTABQgJgBgJAHQgJAFgEAKQgEAIgCAPQgCANAAAkQAAASACAFQABAGAEADIAHACQAJAEAAAHQAAAHgJADQgIADgYAAQgcAAgJgDg");
	this.shape_15.setTransform(102.9,-21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006E47").s().p("AgfCDQgKgDABgJQgBgGAKgDIAEgCQAFgDACgGQABgGAAgOIAAgMIAAgPIAAgTQABgdgCgHQgCgJgDgCIgJgDQgLgEAAgGQAAgEAEgDQADgEAIgDIAbgJIATgDQAFAAACADQADAEgBAIIAAALIAAAJIgBAtIAAABIgBAtQAAASABAHQACAHAEACIAHADQAJAEAAAHQAAAHgJADQgJADgXAAQgcAAgIgDgAgVhcQgJgGAAgKQABgKAIgHQAJgIAMAAQALAAAIAHQAIAHgBAKQAAAKgIAHQgJAHgLAAQgMAAgHgHg");
	this.shape_16.setTransform(86.3,-25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E47").s().p("AgNBfIgUgDIgFADIgGABIgEgBIgDgCQgGgFgGgPQgFgPAAgOQAAgFADgEQADgEAFAAQAIAAAJAPIAHALQAFAHAKAEQAJAFAKAAQANgBAHgFQAHgHAAgKQAAgQgegOIgLgGQgcgOgKgLQgKgLAAgSQAAgXAQgPQARgQAaAAIAMABIANACIAJgDIAGgBQAJAAAIAOQAJAPAAAQQAAAGgDAEQgDADgFAAQgFAAgEgDQgEgEgFgIQgHgMgHgEQgIgFgKAAQgKAAgGAGQgHAGAAAKQAAAIAHAGQAHAHAWALIACABQAzAYAAAfQAAAZgUARQgTARgeAAg");
	this.shape_17.setTransform(72.8,-21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E47").s().p("AAhBWIgKgJIgIAEQgWAPgWAAQgbAAgRgQQgRgPAAgaQAAgdAWgPQAVgRAmAAQAJAAAFADQAFADgBAHQAAAKgMAAQgSAAgLAIQgLAJAAAQQAAAOAJAJQAKAJAQAAQASAAAHgIQAHgIABgTIAAhFQAAgQgIgJQgGgJgMAAQgKAAgHAFQgIADgHAJIgEAEQgLAOgNAAQgGAAgFgEQgFgFABgIQAAgRAVgMQAVgMAhAAQAUAAAPAGQAOAFAIAKQAGAHACAMQADALAAAaIAAA6QAAALABAFQACAFADABIAGABQALAEAAAGQABAIgMAIQgNAHgQAAQgJAAgIgKg");
	this.shape_18.setTransform(55.1,-21.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E47").s().p("Ag7BFQgagbAAgnQAAgqAbgbQAbgdAoAAQAkABAUAUQAVAUAAAiQAAAMgDADQgEADgNABIhGAAQgGAAgDgEQgDgDAAgEQAAgFADgCQADgDAGAAIAmAAIAJgCQACgBAAgEQAAgSgMgMQgMgMgQAAQgWAAgKATQgLATAAAbQAAAcAPAVQAOAUAXAAQANAAAKgCQAJgDAJgGIAGgGQAKgIAFAAQAEAAACAEQADACAAADQAAAFgFAHQgEAGgIAGQgQANgPAGQgOAGgSAAQgmAAgagbg");
	this.shape_19.setTransform(35,-21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E47").s().p("AgeCDQgJgCAAgJQAAgGAIgDIAJgFQADgDABgLIACgkIAAgdIgBghIAAgPQAAgtgBgOQgCgNgEgCIgLgFQgMgDAAgGQAAgEAEgEQAEgDANgEIAYgHIASgDQAGAAACAEQACADAAAJIAAAOQgCBBAABBIABA/QABANADAEIAKAFQAJADAAAIQAAAGgJADQgJADgYAAQgbAAgJgDg");
	this.shape_20.setTransform(19.5,-25.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E47").s().p("AheCBQgKgCAAgJQAAgHALgEIAIgFQADgDACgVQACgWAAg5IgChFQgBgagCgEQgCgDgKgEQgKgEABgGQgBgHAGgDQAFgEAMAAIATAAIAVAAIAlgBIAdAAQApAAAUARQAVASgBAiQAAAngZAVQgZASgxABQgRAAAAgNQAAgMAPAAQAXAAAOgMQAOgMAAgcQAAgZgOgMQgPgMgcABQgOAAgFABQgGADgCAFIgBARIgBAmIAABQIABA0QABANADADIAIAEQALAEAAAHQAAAJgKACQgJAEgeAAQgcAAgKgEg");
	this.shape_21.setTransform(3.9,-25.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E47").s().p("AgjATQgGAAgCgCQgDgCAAgFIACgJIAEgJQACgGADgCQADgBAHAAIAJAAIAQABIAfgCIAFAAQAGAAACACQADACAAAFQAAAJgGAKQgGAIgIAAIgJAAIgKAAIgoABIgDAAg");
	this.shape_22.setTransform(-14.2,-21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E47").s().p("AhQBvQgVgZAAgnQAAgtAZgbQAZgdAmAAIANADQAGABADAEQADAEAAAEQAAAKgMAAIgFAAIgEgBQgVABgMAQQgMAQAAAdQAAAfANATQANAUAVAAQASAAALgLQALgLAAgVIAAgxIAAhUQAAgNgDgFQgDgFgGgDIgFgBQgMgDAAgHQAAgEAFgEQAFgDANgGIAVgFIARgDQAGAAADAEQACAEAAAIIAAAJIgCBxIABBMQACASADACIAMAEQAKACAAAHQAAAIgbAJIgSAEIgNACQgFAAgDgDQgCgDAAgGIAAgJIAAgDIgBgBIgGADIgJAHQgLAIgJADQgLAEgLABQgiAAgWgZg");
	this.shape_23.setTransform(-31.1,-25.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E47").s().p("AAKAUIgVg5QgKgZgJgFIgFgCQgLgFAAgHQAAgHAKgDQAIgCAdAAQAZAAAJACQAJADAAAHIgBAGIgEADIgGAEQgIACABAEIADANIAPAlIAPAjQAFAJACAAQADAAADgGIAJgPIATguQAHgRAAgHIgCgHIgEgDIgGgDQgHgDAAgGQAAgHAHgDQAJgCAXAAQASAAAJACQAHADABAHQAAAHgKADIgHADQgIAEgRAmIgDAJIgIARQgqBegMABQgMgBghhKgAhrAKIgFgLIgMgfQgMgfgIgEIgGgCQgLgFABgHQAAgHAJgDQAJgCAeAAQAZAAAIACQAKADgBAHIAAAGIgEADIgGAEQgHACgBAEIAEAPIAOAjIAQAjQAFAJACAAQAFgBAGgKIAFgOIAFgFQACgCAEAAQAEAAADADQADACAAAEQgBAFgFAKQgSArgJANQgJAOgGABQgNgBgkhUg");
	this.shape_24.setTransform(-57.7,-21.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006E47").s().p("AhCBFQgagbAAgpQAAgoAbgcQAbgcApAAQAnAAAZAaQAaAaAAAoQAAApgbAdQgcAdgnAAQgnAAgagbgAgig2QgMAPAAAYQAAAkAQAYQAQAZAUAAQATAAAKgPQAMgPAAgZQAAgjgQgYQgPgZgVAAQgSAAgLAPg");
	this.shape_25.setTransform(-83.7,-21.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006E47").s().p("Ag3BbQgJgDAAgJQAAgGAJgDIAFgCQAFgDACgGQABgFAAgOIAAgNIAAgOIAAgLQAAgigBgJQgCgLgEgCIgIgDQgLgDAAgHQAAgEAEgDQACgDAJgEIAZgIIAPgDQAJABAEAYIAAADIABABQAJgOAKgIQALgIAKAAQANAAAHAIQAIAIAAAMQAAANgGAHQgGAIgKgBIgKgBIgHgGIgEgGQgCgGgDAAQgMAAgFASQgEASAAA2QAAAQABAJQACAHAGADIAHACQAKADABAIQgBAHgJADQgLADgYAAQgcAAgJgDg");
	this.shape_26.setTransform(-100.9,-21.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006E47").s().p("AgcCAQgYgJgTgRQgVgTgLgbQgLgcAAgfQAAgaAHgWQAHgVAPgSQASgWAagMQAZgMAeAAIAWACIAkAIIAEgBIAOgDIAGABIAFAGQAGAKADAOQAEAOAAAKQAAAIgDAEQgCAEgGAAQgIAAgOgQIgMgOQgKgKgOgFQgPgGgRAAQgjAAgVAZQgUAYAAArQAAA2AaAiQAaAjAnAAQAQAAAPgFQAOgFAJgKIAJgKQAIgLAFAAQAFAAADAFQADAFAAAJQAAARgFAKQgEAKgJAAIgBgBIgDAAQgRAJgRAEQgRAFgTAAQgaAAgZgJg");
	this.shape_27.setTransform(-121.1,-25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.crowdpleasing, new cjs.Rectangle(-136,-49.5,272,91), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.nineteenrollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(7));

	// rollover
	this.instance = new lib.nineteenvideo();
	this.instance.parent = this;
	this.instance.setTransform(0,-8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-27.5,154.3,39.1);


// stage content:
(lib.halfpagebannernineteen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_216 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(163).call(this.frame_216).wait(2));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(150.3,301.6,1.456,0.919,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(218));

	// grey-rectangle
	this.instance = new lib.greyrectangle();
	this.instance.parent = this;
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(218));

	// fade-from-white
	this.instance_1 = new lib.blackwideskyscraper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.2,300,1.826,1,0,0,0,0.1,0);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).wait(209));

	// kale-logo
	this.instance_2 = new lib.kalelogo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,37);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({scaleX:0.09,scaleY:0.09},0).to({scaleX:1.07,scaleY:1.07,alpha:1},6,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:1,scaleY:1,x:150.1,y:37.2},7,cjs.Ease.get(1)).wait(196));

	// get-inspired
	this.instance_3 = new lib.getinspired();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,343.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(53).to({alpha:1},10).wait(155));

	// rollover
	this.cta_rollover = new lib.nineteenrollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(150,345);
	this.cta_rollover.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(53).to({alpha:1},10).wait(155));

	// rectangle
	this.instance_4 = new lib.nineteenrectangle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,345);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({alpha:1},10).wait(155));

	// Ready-shrimp
	this.instance_5 = new lib.readyshrimp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(150,232.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({alpha:1},10).wait(40).to({alpha:0},5).wait(20));

	// party-perfect-crudeite-bolwos
	this.instance_6 = new lib.partyperfect();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.9,232.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(93).to({x:150},0).to({alpha:1},10).wait(40).to({alpha:0},5).wait(70));

	// crowd-pleasing
	this.instance_7 = new lib.crowdpleasing();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,232.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(43).to({alpha:1},10).wait(40).to({alpha:0},5).wait(120));

	// holiday-small-bites-platters
	this.instance_8 = new lib.holidaysmallbite();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,246.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(203).to({alpha:1},10).wait(5));

	// get-party-started
	this.instance_9 = new lib.getpartystarted();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,156.8);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(203).to({alpha:1},10).wait(5));

	// top-left
	this.instance_10 = new lib.nineteencheese();
	this.instance_10.parent = this;
	this.instance_10.setTransform(93,64.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(19).to({alpha:1},10).wait(189));

	// bottom-right
	this.instance_11 = new lib.nineteenbottomright();
	this.instance_11.parent = this;
	this.instance_11.setTransform(215.5,482);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({alpha:1},10).wait(184));

	// bottom-left
	this.instance_12 = new lib.nineteenbottomleft();
	this.instance_12.parent = this;
	this.instance_12.setTransform(55.5,464);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({alpha:1},10).wait(179));

	// top-right
	this.instance_13 = new lib.nineteentopright();
	this.instance_13.parent = this;
	this.instance_13.setTransform(257.5,75.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(35).to({alpha:1},10).wait(173));

	// table
	this.instance_14 = new lib.fourteentable_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(218));

	// crackers
	this.instance_15 = new lib.nineteencrackers_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(16,166);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({alpha:1},10).wait(194));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,290,300,613);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_P_.png", id:"index_atlas_P_"},
		{src:"images/index_atlas_NP_.jpg", id:"index_atlas_NP_"}
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
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;