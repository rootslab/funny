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
                    [ scope ].concat( [ arr ] );
            return fproto.bind.apply( fn, args );
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
        /* 
         * recur method is to bypass the tail call recursion problem,
         * this method use a 'trampolining' method for recursion, code was
         * based on https://github.com/Gozala/js-tail-call
         */
        , recur = function ( fn ) {
            var result = null,
                active = false,
                args = [];
            return function () {
                // on every call, given set of parameters are accumulated.
                args.push( arguments );
                if ( ! active ) {
                    /*
                     * if accumulator is inactive, is not in the process
                     * of tail recursion, activate it and start accumulating
                     * parameters.
                     */
                    active = true;
                    /* 
                     * if wrapped 'fn' performs tail call, then new set of parameters will
                     * be accumulated causing new iteration in the loop. If 'fn' does not
                     * performs tail call then accumulation is finished and result is
                     * returned.
                     */
                    while ( args.length ) {
                        result = fn.apply( this, args.shift() );
                    }
                    active = false;
                    return result;
                }
            };
        }
        ;
    return {
        bind : ( legacy ) ? prepend : bind
        , mock : mock
        , echoFn : echoFn
        , emptyFn : emptyFn
        , recur : recur
        , slice : mock( aproto.slice )
        , toString : mock( oproto.toString )
    };

} )();