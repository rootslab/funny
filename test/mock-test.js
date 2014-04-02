#!/usr/bin/env node

/* 
 * Funny#mock test
 */

var log = console.log
    , assert = require( 'assert' )
    , util = require( 'util' )
    , Funny = require( '../' )
    // shortcut to Array.prototype.slice
    , slice = Funny.slice
    // is the same as doing:
    , mslice = Funny.mock( Array.prototype.slice )

    // shortcut to Object.prototype.toString ( toString )
    , toString = Funny.toString
    // is the same as doing:
    , mtoString = Funny.mock( Object.prototype.toString ),

    // test fn
    fn = function () {
        // use array proto slice to convert arguments to Array
        var args = slice( arguments || [] )
            // get toString  
            , otype = toString( args )
            ;

        log( '\n- test if slice result is an array:', Array.isArray( args ) );
        assert.ok( Array.isArray( args ), 'wrong slice result: %j', args );

        log( '- test if toString result is "[object Array]": %s', otype );
        assert.ok( ( otype === '[object Array]' ), 'wrong toString result' );

        log( '- compare slice and Array.prototype.slice results.' );
        assert.deepEqual( Array.prototype.slice.call( arguments ), args );

        log( '- compare toString and Object.prototype.toString results.' );
        assert.ok( toString.call( arguments ), otype );

    }
    // get result
    , result = fn( 1, 2, 3 )
    ;