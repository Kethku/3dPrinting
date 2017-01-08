// title      : OpenJSCAD.org Logo
// author     : Rene K. Mueller
// license    : MIT License
// revision   : 0.003
// tags       : Logo,Intersection,Sphere,Cube
// file       : logo.jscad

var BearingHeight = 8;
var BearingHoleRadius = 7.85 / 2;
var BearingOuterRadius = 20 / 2;
var CapHeight = 1.5;
var DivitRadius = 15;
var DivitOffset = 14.5;
var SpacerHeight = 0.3;
var SpacerRadius = 15 / 2;

function main() {
    return union(
        cylinder({r: BearingHoleRadius, h: BearingHeight / 2})
            .translate([0,0,-BearingHeight/2]),
        cylinder({r: BearingOuterRadius, h: CapHeight}),
        cylinder({r: SpacerRadius, h: SpacerHeight})
            .translate([0,0,-SpacerHeight])
    ).subtract(
        sphere({r: DivitRadius})
            .translate([0,0,DivitOffset])
    );
}
