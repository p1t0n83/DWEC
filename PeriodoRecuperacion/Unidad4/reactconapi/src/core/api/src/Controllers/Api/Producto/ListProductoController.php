<?php
declare(strict_types=1);

namespace App\Controllers\Api\Producto;

use App\Entities\Producto;

final class ListProductoController
{
   public function __invoke(): void
{
    // Cabeceras CORS para permitir peticiones de cualquier origen
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');

    // Si la petición es OPTIONS (preflight), simplemente devolvemos 200 y terminamos
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit;
    }

    $producto = new Producto();
    $productos = $producto->get();
    $response = response();
    if ($productos !== false && !empty($productos)) {
        $response->httpCode(200)
            ->json([
                'status' => 'success',
                'data' => $productos,
            ]);
    } else {
        $response->httpCode(500)
            ->json([
                'status' => 'error',
                'message' => 'No se pudieron obtener los productos.',
            ]);
    }
    }
}