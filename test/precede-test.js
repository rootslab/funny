#!/usr/bin/env node

/* 
 * Funny#precede test
 */

var log = console.log
    , assert = require( 'assert' )
    , Funny = require( '../' )
    , slice = Funny.slice
    // precede fn
    , precede = Funny.precede
    // 1st function
    , zn = function () {
        log( '\n- check arguments passed to the 1st function.' );
        var args = slice( arguments ) || [];
        assert.ok( args[ 0 ] === err, '1st argument should be an error, now is: ' + args[ 0 ] );
        assert.ok( args[ 1 ] === msg, '2nd argument should be a string, now is: ' + args[ 1 ] );
        assert.ok( typeof arguments[ 2 ] === 'function', '3rd argument should be a function, now is: ' + arguments[ 2 ] );

        log( '- check current scope for 1st function.' );
        assert.ok( this === env, 'wrong scope for 2nd function!' );

        log( '- now 1st function sleeps for 3 secs...' );
        // wait 3 secs
        setTimeout( function () {
            log( '- test if first function is not already executed.' );
            assert.ok( ! flag, 'damn! 1st function was already executed!' );
            log( '- ok, executing 2nd function.' );
            args[ 2 ]( args[ 0 ], args[ 1 ] );
        }, 3000 );
    }
    , o = {
        // 2nd function
        fn : function ( err ) {
            flag = true;
            log( '- check arguments passed to the 2nd function.' );
            var args = slice( arguments ) || [];
            assert.ok( args[ 0 ] === err, '1st argument should be an error, now is: ' + args[ 0 ] );
            assert.ok( args[ 1 ] === msg, '2nd argument should be a string, now is: ' + args[ 1 ] );

            log( '- check current scope for 2nd function.\n' );
            assert.ok( this === env, 'wrong scope for 2nd function!' );
        }
    }
    , env = { 'zZz' : 'Zzz' }
    // precede execution of o.fn by zn
    , f = precede( zn, o.fn, env )
    , err = new Error( 'an error present' )
    , msg = 'ouch!'
    , flag = false
    ;

f( err, msg );