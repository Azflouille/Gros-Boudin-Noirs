<?php

namespace wishlist\model;

use Illuminate\Database\Eloquent\Model;

class Produit extends Model
{
    protected $table = 'produit';
    protected $primaryKey = 'id';
    public $timestamps = false;

    public function produits(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsto('wishlist\model\Categorie', 'categorie');
    }

}