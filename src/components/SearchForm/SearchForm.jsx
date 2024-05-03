import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCarBrands } from '../../api';
import {
  Form,
  InputSelect,
  InputText,
  InputsGroup,
  InputsWrapp,
  Label,
  Pricing,
  SelectGroup,
  SubmitBtn,
} from './SearchForm.styled';

export const SearchForm = () => {
  const [carBrands, setCarBrands] = useState([]);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    const fetchCarBrands = async () => {
      try {
        const brands = await getCarBrands();
        setCarBrands(brands);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCarBrands();
  }, []);

  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SelectGroup>
          <Label>
            Year of manufacture
            <InputSelect {...register('year')}>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </InputSelect>
          </Label>

          <Label>
            Select car brand
            <InputSelect {...register('brand')}>
              <option value="all">All</option>
              {carBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </InputSelect>
          </Label>
          <Label>
            Select model
            <InputSelect {...register('model')}>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </InputSelect>
          </Label>
          <Label>
            Moved (km)
            <InputSelect {...register('moved')}>
              <option value="female">&lt; 10000</option>
              <option value="male">&lt; 50000</option>
              <option value="other">&lt; 100000</option>
            </InputSelect>
          </Label>
          <Label>
            Select geerbox type
            <InputSelect {...register('geer')}>
              <option value="manual">Manual</option>
              <option value="automatic">Automatic</option>
            </InputSelect>
          </Label>
          <Label>
            Car Status
            <InputSelect {...register('status')}>
              <option value="old car">old car</option>
              <option value="brand new car">brand new car</option>
            </InputSelect>
          </Label>
        </SelectGroup>
        <InputsGroup>
          <Pricing>Pricing ( USD )</Pricing>
          <InputsWrapp>
            <Label>
              From
              <InputText placeholder="1'000" {...register('priceFrom')} />
            </Label>
            <Label>
              To
              <InputText placeholder="100'000" {...register('priceTo')} />
            </Label>
          </InputsWrapp>
          <SubmitBtn type="submit">Search Car</SubmitBtn>
        </InputsGroup>
      </Form>
    </section>
  );
};
