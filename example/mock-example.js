var log = console.log
    // require Funny
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
            , ok = ( otype === '[object Array]' ) && ( Array.isArray( args ) )
            ;
        log( '\n- fn arguments: %j', arguments );
        log( '- converted arguments to array with slice:', ok );
        log( '- toString result: "%s"', otype );
        log( '- fn converted args: %j\n', args );
    }
    // get result
    , result = fn( 1, 2, 3 )
    ;