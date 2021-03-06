/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AttributesValueStruct model module.
 * @module model/AttributesValueStruct
 * @version 3.0.0
 */
class AttributesValueStruct {
    /**
     * Constructs a new <code>AttributesValueStruct</code>.
     * @alias module:model/AttributesValueStruct
     */
    constructor() { 
        
        AttributesValueStruct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttributesValueStruct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttributesValueStruct} obj Optional instance to populate.
     * @return {module:model/AttributesValueStruct} The populated <code>AttributesValueStruct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttributesValueStruct();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('unit')) {
                obj['unit'] = ApiClient.convertToType(data['unit'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} number
 */
AttributesValueStruct.prototype['number'] = undefined;

/**
 * @member {String} unit
 */
AttributesValueStruct.prototype['unit'] = undefined;






export default AttributesValueStruct;

