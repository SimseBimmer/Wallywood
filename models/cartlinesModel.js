const supabase = require('../supabaseClient');

class CartlinesModel {
    static async getAllCartlines() {
        const { data, error } = await supabase
            .from('cartlines')
            .select('*');
        if (error) throw new Error(error.message);
        return data;
    }

    static async getCartlineById(id) {
        const { data, error } = await supabase
            .from('cartlines')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw new Error(error.message);
        return data;
    }

    static async createCartline(cartlineData) {
        const { data, error } = await supabase
            .from('cartlines')
            .insert([cartlineData]);
        if (error) throw new Error(error.message);
        return data[0];
    }

    static async updateCartline(id, cartlineData) {
        const { data, error } = await supabase
            .from('cartlines')
            .update(cartlineData)
            .eq('id', id);
        if (error) throw new Error(error.message);
        return data[0];
    }

    static async deleteCartline(id) {
        const { data, error } = await supabase
            .from('cartlines')
            .delete()
            .eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }
}

module.exports = CartlinesModel;
