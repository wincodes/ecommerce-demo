<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index(){
        return Product::all();
    }

    public function create(Request $data){
        return Product::create([
            'name' => $data->products['name'],
            'category' => $data->products['category'],
            'price' => $data->products['price'],
            'description' => $data->products['description'],
            'picture' => $data->products['picture'],
        ]);
    }
}
