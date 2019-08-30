<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $data){
        return User::create([
            'name' => $data->user['name'],
            'email' => $data->user['email'],
            'password' => Hash::make($data->user['password']),
        ]);
    }

    public function login(Request $data){
        $email = $data->user['email'];
        $userPassword = $data->user['password'];
        
        $user = User::where('email', $email)->first();
        if(!empty($user))
        {
            //verify the password
            if (Hash::check($userPassword, $user->password)) {

                Auth::login($user);

                return response()->json([
                    'user' => $user
                ]);;

            }else
            {
                //the password is incorrect
                $user = ''; 
                return response()->json([
                    'error' => 'Password is Incorrect'
                ]);
            }
        }else
        {
            //email not found
            return response()->json([
                'error' => 'Email Does not exist'
            ]);
        }
    }

    public function logout(){
        
        Auth::logout();
        Auth::guard()->logout();

        return redirect('/');
    }
}
