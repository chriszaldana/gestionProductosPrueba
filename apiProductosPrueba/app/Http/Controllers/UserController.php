<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function register(Request $request){
       try {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return response()->json([
            'message' => 'Registration successful',
            'user' => $user
        ], 201);

       } catch (Exception $e) {
           return response()->json([
               'message' => 'Registration failed',
               'error' => $e->getMessage()
           ], 400);
        
       }
    }

    public function login(Request $request){
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required|min:8'
            ]);

            $credentials = $request->only('email', 'password');

            if (!Auth::attempt($credentials)) {
                return response()->json([
                    'message' => 'Invalid login details'
                ], 401);
            } 

            $user = $request->user();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                'token' => $token
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Login failed',
                'error' => $e->getMessage()
            ], 400);
        }
    }

    public function logout(Request $request){
        try {
            $request->user()->tokens()->delete();

            return response()->json([
                'message' => 'Logged out'
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'message' => 'Logout failed',
                'error' => $e->getMessage()
            ], 400);
        }
    }
}
