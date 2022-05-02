
export enum EFieldType {
    /**
     * Basic field type, equal to input[type="text"]
     *
     * Default Field type,
     */
    TEXT,
    /**
     * Textarea field
     * @internal use TextareaField
     */
    TEXTAREA,
    /**
     * Dropdown field, equal to <mat-select>
     * @internal use SelectField
     */
    SELECT,
    /**
     * Basic field type, equal to input[type="password"]
     */
    PASSWORD,
    /**
     * Basic field type, equal to input[type="email"]
     */
    EMAIL,
    /**
     * Material datepicker
     * @internal use DateField
     */
    DATE,
    /**
     * Basic field type, equal to input[type="datetime-local"]
     *
     * Use it with TimeField
     */
    DATETIME,
    /**
     * Basic field type, equal to input[type="time"]
     *
     * Default for TimeField
     */
    TIME,
    /**
     * Material checkbox
     */
    CHECKBOX,
    /**
     * Material radio field
     * @internal use RadioField
     */
    RADIO,
    /**
     * Basic field type, equal to input[type="number"]
     */
    NUMBER,
    /**
     * Field type that using "intl-tel-input" library with material design to display countries dial-number
     */
    TEL,
    /**
     * Field type that used "intl-tel-input" library with material design to display list of countries
     */
    COUNTRY,
    /**
     * @internal use RawField
     */
    RAW_FIELD,
    /**
     * Field that will be registerd in the Form group without being shown in the DOM
     */
    HIDDEN,
    MASK
}
