import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/features/themeSlice';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import ReactSelect from 'react-select';

const Signup = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, watch, control, formState: {errors} } = useForm();

    // useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type));
    //     return () => subscription.unsubscribe();
    //   }, [watch]);

    const onSubmit = (data) => {
        console.log('data --> ', data);
        dispatch(setTheme(data.color))
    }

    const genderOptions = [
        { value: 1, label: '🙎‍♂️ Male' },
        { value: 2, label: '🙎‍♀️ Female' }
    ]

    const hobbyOptions = [
        { value: 1, label: 'Football'},
        { value: 2, label: 'Coffee' },
        { value: 3, label: 'Reading' }, 
        { value: 4, label: 'Sport' }
    ]

    const colorOptions = [
        { value: 1, label: 'Red', bgColor: '#D9231E', color: '#202124' },
        { value: 2, label: 'Blue', bgColor: '#002473', color: '#2B3539' },
        { value: 3, label: 'Green', bgColor: '#38C669', color: '#23F0DC' },
        { value: 4, label: 'Purple', bgColor: '#753079', color: '#D3CAE3' },
        { value: 5, label: 'Forest', bgColor: '#013B3C', color: '#9AAC92' },
        { value: 6, label: 'Ocean', bgColor: '#0ED4CB', color: '#D9C6AF' },
    ]

    // console.log('errors -->', errors);

    return (
        <div className='container py-2'>
            <div className="w-25 mx-auto">
                <h2 className="my-5">Create new Account</h2>

                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        {...register('email', { 
                            required: true,
                            pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}'
                        })}
                        placeholder="Enter email" />
                        {(errors.email && errors.email.type) === "required"
                            &&
                            <Form.Text className="text-danger">
                                email is required
                            </Form.Text>
                        }
                        {(errors.email && errors.email.type) === 'pattern'
                            &&
                            <Form.Text className="text-danger">
                                email is not vaild
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                        type="tel"
                        name="phone"
                        {...register('phone', { 
                            required: true,
                            maxLength: 11 
                        })}
                        placeholder="Enter phone number" />
                        {(errors.phone && errors.phone.type) === "required"
                            &&
                            <Form.Text className="text-danger d-block">
                                phone is required
                            </Form.Text>
                        }
                        {(errors.phone && errors.phone.type) === "maxLength"
                            &&
                            <Form.Text className="text-danger d-block">
                                phone max length is 11
                            </Form.Text>
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Controller
                            name="gender"
                            control={control}
                            render={({ field }) => <ReactSelect 
                            {...field} 
                            options={genderOptions} 
                            placeholder="Select your Gender"
                            />}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="hobby">
                        <Form.Label>Hoppies</Form.Label>
                        <Controller
                            name="hobby"
                            control={control}
                            render={({ field }) => <ReactSelect 
                            {...field} 
                            options={hobbyOptions}
                            isMulti
                            isSearchable
                            placeholder="Select your hobbies..."
                            />}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="color">
                        <Form.Label>Theme Color</Form.Label>
                        <Controller
                            name="color"
                            control={control}
                            render={({ field }) => <ReactSelect 
                            {...field} 
                            options={colorOptions}
                            placeholder="Select Prefered Theme Color" 
                            />}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        {...register('password', {
                            required: true,
                            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
                        })}
                        placeholder="*****" />
                        {(errors.password && errors.password.type) === "required"
                            &&
                            <Form.Text className="text-danger d-block">
                                password is required
                            </Form.Text>
                        }
                        {(errors.password && errors.password.type) === "pattern"
                            &&
                            <Form.Text className="text-danger d-block">
                                Invalid password!
                            </Form.Text>
                        }
                    </Form.Group>

{/* Has minimum 8 characters in length. Adjust it by modifying 
At least one uppercase English letter. You can remove this condition by removing 
At least one lowercase English letter.  You can remove this condition by removing
At least one digit. You can remove this condition by removing
At least one special character,  You can remove this condition by removing

{/* password test: 125d45sd!7K@w */}

                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="confirmPassword"
                        {...register('confirmPassword', {
                            required: true,
                            validate: (val: string) => {
                                if (watch('password') !== val) {
                                  return "Your passwords do no match";
                                }
                              },
                        })}
                        placeholder="confirm password" />
                        {(errors.confirmPassword && errors.confirmPassword.message)
                            &&
                            <Form.Text className="text-danger d-block">
                                {errors.confirmPassword.message}
                            </Form.Text>
                        }

                    </Form.Group>

                    <div className="text-center">
                        <Button variant="dark" className="btn-lg mt-3 px-4" type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
    
}

export default Signup;