import { gql} from '@apollo/client';

export const QUERY_HOMES = gql`
query homes($name: String, $image: String, $area: String, $size: Int, $bedroomsandBath: Int, $stories: String, $style: String) {
    homes($name: String, $image: String, $area: String, $size: Int, $bedroomsandBath: Int, $stories: String, $style: String) {
      _id
      name
      image
      area
      size
      price
      bedroomsandBath
      stories
      style
    }
  }
`;