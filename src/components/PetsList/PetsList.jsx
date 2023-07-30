import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PetItem from '../PetsItem/PetsItem';
import { Title, Text, UserPetsList, InfoCard } from './PetsList.styled';

import petsOperations from 'redux/pets/operations';
import petsSelector from 'redux/pets/selectors';

const PetsList = () => {
  const pets = useSelector(petsSelector.selectPets);
  const dispatch = useDispatch();

  // const [pets, setPet] = useState([]);
  // const pets = useSelector(userPetsSelector.selectUserPets);

  useEffect(() => {
    dispatch(petsOperations.fetchUserPet());
    // const getUserPet = async () => {
    //   const result = await fetchUserPet();
    //   console.log('result:', result);
    //   setPet([...result]);
    // };
    // getUserPet();
  }, [dispatch]);
  console.log(pets);

  return (
    <>
      {pets.length !== 0 ? (
        <UserPetsList>
          {pets.map(pet => (
            <li key={pet._id}>
              <PetItem pet={pet} />
            </li>
          ))}
        </UserPetsList>
      ) : (
        <InfoCard>
          <Title>Here will be your pets</Title>
          <Text>To add, press the button AddPet</Text>
        </InfoCard>
      )}
    </>
  );
};
export default PetsList;
