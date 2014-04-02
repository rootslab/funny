/*
 * Funny, a jolly helper for functions.
 *
 * Copyright(c) 2014 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Funny = ( function () {
    var log = console.log
        // legacy flag
        , legacy = !!false
        // proto schortcuts
        , aproto = Array.prototype
        , fproto = Function.prototype
        , oproto = Object.prototype
        // other shortcuts
        , isArray = Array.isArray
        , bind = function ( fn, arr, scope ) {
            var args = isArray( arr ) ?
                    [ scope ].concat( arr ) :
                    [ scope ].concat( [ arr ] )
                , bfn = fproto.bind.apply( fn, args );
            return function () {
                return bfn.apply( scope, arguments );
            }
        }
        , echoFn = function ( voice ) {
            return voice;
        }
        , emptyFn = function () {
        }
        // returns a new function, bound to fn
        , mock = function ( fn ) {
            return fproto.call.bind( fn );
        }
        // legacy bind
        , prepend = function ( fn, arr, scope ) {
            return function () {
                var args = slice( arguments );
                if ( arr ) {
                    if ( isArray( arr ) ) {
                        args = arr.concat( args );
                    } else {
                        args = [ arr ].concat( args );
                    }
                }
            return fn.apply( scope, args );
            }
        }
        
        ;
    return {
        bind : ( legacy ) ? prepend : bind
        , mock : mock
        , echoFn : echoFn
        , emptyFn : emptyFn
        , slice : mock( aproto.slice )
        , toString : mock( oproto.toString )
    };

} )();