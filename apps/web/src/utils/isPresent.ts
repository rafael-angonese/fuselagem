import isBlank from './isBlank'

/* Examples
  isPresent( '   ' )      => false
  isPresent( null )       => false
  isPresent( undefined )  => false
  isPresent( {} )         => false
  isPresent( [] )         => false
  isPresent( [''] )       => false
  isPresent( 0 )          => false
  isPresent( {k: 1} )     => true
  isPresent( '0' )        => true
  isPresent( ['1'] )    => true
  isPresent( new Date ) => true
*/

const isPresent = (value: any): boolean => {
  return !isBlank(value)
}

export default isPresent
