const supabase = require('../supabaseClient');

class UserProfilesModel {
    static async getAllProfiles() {
        const { data, error } = await supabase
            .from('user_profiles')
            .select('*');
        if (error) throw new Error(error.message);
        return data;
    }

    static async getProfileById(id) {
        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw new Error(error.message);
        return data;
    }

    static async createProfile(profileData) {
        const { data, error } = await supabase
            .from('user_profiles')
            .insert([profileData]);
        if (error) throw new Error(error.message);
        return data[0];
    }

    static async updateProfile(id, profileData) {
        const { data, error } = await supabase
            .from('user_profiles')
            .update(profileData)
            .eq('id', id);
        if (error) throw new Error(error.message);
        return data[0];
    }

    static async deleteProfile(id) {
        const { data, error } = await supabase
            .from('user_profiles')
            .delete()
            .eq('id', id);
        if (error) throw new Error(error.message);
        return data;
    }
}

module.exports = UserProfilesModel;
