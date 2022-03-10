<?php

namespace wishlist\model;

use Illuminate\Database\Eloquent\Model;

class Boite extends Model
{
    protected $table = 'boite';
    public $timestamps = false;

    public function liste(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo('wishlist\model\Liste', 'liste_id');
    }

    public function getComment(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany('wishlist\model\CommentaireItem',"item_id");
    }
}